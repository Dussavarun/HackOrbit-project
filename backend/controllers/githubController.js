
const BASE_URL = "https://api.github.com/users";

export const fetchGitHubProfile = async (username) => {
  try {
    const res = await fetch(`${BASE_URL}/${username}`);
    if (!res.ok) throw new Error("Profile fetch failed");
    return await res.json();
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
};

export const fetchGitHubRepos = async (username) => {
  try {
    const res = await fetch(`${BASE_URL}/${username}/repos?per_page=100`);
    if (!res.ok) throw new Error("Repo fetch failed");
    return await res.json();
  } catch (error) {
    console.error("Error fetching repos:", error);
    return [];
  }
};

export const fetchRepoLanguages = async (owner, repo) => {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`);
    if (!res.ok) throw new Error("Languages fetch failed");
    return await res.json();
  } catch (error) {
    console.error("Error fetching languages for repo:", repo, error);
    return {};
  }
};

export const analyzeGitHubUser = async (username) => {
  try {
    const profile = await fetchGitHubProfile(username);
    const repos = await fetchGitHubRepos(username);

    const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
    const totalForks = repos.reduce((sum, repo) => sum + (repo.forks_count || 0), 0);
    const topLanguages = [...new Set(repos.map((r) => r.language).filter(Boolean))].slice(0, 5);
    const recentRepos = repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)).slice(0, 5);

    return {
      username,
      publicRepos: profile?.public_repos || 0,
      followers: profile?.followers || 0,
      totalStars,
      totalForks,
      topLanguages,
      recentRepos,
    };
  } catch (err) {
    console.error("Crash in analyzeGitHubUser:", err);
    return null;
  }
};

// Summary builder
export const buildCompactProfileSummary = async (username) => {
  const profile = await fetchGitHubProfile(username);
  const repos = await fetchGitHubRepos(username);

  const stars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
  const forks = repos.reduce((sum, r) => sum + (r.forks_count || 0), 0);

  const langsSet = [...new Set(repos.map((r) => r.language).filter(Boolean))];
  const langs = langsSet.slice(0, 5).map(lang =>
    lang === "JavaScript" ? "JS" :
    lang === "Python" ? "Py" :
    lang === "TypeScript" ? "TS" : lang
  );

  const recent = [...repos]
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, 3)
    .map((r) => r.name);

  const lvl = stars > 200 ? "High" : stars > 50 ? "Mod" : "Low";

  const r = await Promise.all(
    repos.map(async (repo) => {
      const lObj = await fetchRepoLanguages(username, repo.name);
      const l = Object.keys(lObj).map(lang =>
        lang === "JavaScript" ? "JS" :
        lang === "Python" ? "Py" :
        lang === "TypeScript" ? "TS" : lang
      );
      return { n: repo.name, l };
    })
  );

  return {
    u: username,
    s: {
      pr: profile?.public_repos || 0,
      f: profile?.followers || 0,
      stars,
      forks,
      langs,
      lvl,
      recent
    },
    r
  };
};

export const storeGitHubSummaryToDB = async (username, role = "Web Developer") => {
  try {
    const summary = await buildCompactProfileSummary(username);
    if (!summary) throw new Error("Summary is null or undefined");

    const saved = await GitHubSummary.findOneAndUpdate(
      { username }, 
      {
        $set: {
          summary,
          role,
          updatedAt: new Date(),
        },
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    console.log("✅ Summary stored/updated in DB for:", username);
    return saved;
  } catch (err) {
    console.error("❌ Error storing summary to DB:", err.message);
    throw err;
  }
};