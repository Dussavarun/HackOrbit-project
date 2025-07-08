import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// ✅ Register User
export const register = async (req, res) => {
    try {
        const { username, email, password, bio } = req.body;
        console.log("➡️ Received register request:", req.body);

        if (!username || !email || !password || !bio) {
            console.log("❌ Missing fields");
            return res.status(400).json({
                message: "Please fill in all fields.",
                success: false,
            });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            console.log("❌ Email already exists");
            return res.status(400).json({
                message: "User already exists with this email.",
                success: false,
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            profile: {
                bio,
            },
        });

        console.log("✅ New user registered:", newUser._id);

        res.status(201).json({
            message: "Account created successfully.",
            success: true,
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
            },
        });
    } catch (error) {
        console.error("❌ Error in register:", error.message);
        res.status(500).json({
            message: "Server error.",
            success: false,
        });
    }
};

// ✅ Login User
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("➡️ Login request:", email);

        if (!email || !password) {
            return res.status(400).json({
                message: "Missing required fields.",
                success: false,
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            console.log("❌ No user with this email");
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false,
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            console.log("❌ Password mismatch");
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false,
            });
        }

        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
            expiresIn: "1d",
        });

        console.log("✅ Logged in:", user.username);

        res.status(200)
            .cookie("token", token, {
                maxAge: 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: "strict",
            })
            .json({
                message: `Welcome back, ${user.username}!`,
                success: true,
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    bio: user.profile?.bio || "",
                },
            });
    } catch (error) {
        console.error("❌ Error in login:", error.message);
        res.status(500).json({
            message: "Server error.",
            success: false,
        });
    }
};

// ✅ Logout User
export const logout = async (req, res) => {
    try {
        res.status(200)
            .cookie("token", "", { maxAge: 0 })
            .json({
                message: "Logged out successfully.",
                success: true,
            });
    } catch (error) {
        console.error("❌ Error during logout:", error.message);
        res.status(500).json({
            message: "Server error.",
            success: false,
        });
    }
};

// ✅ Update Profile
export const updateProfile = async (req, res) => {
    try {
        const { username, email, bio } = req.body;
        const userId = req.user?.id;

        if (!userId) {
            console.log("❌ No user ID in request");
            return res.status(401).json({
                message: "User not authenticated.",
                success: false,
            });
        }

        const user = await User.findById(userId);
        if (!user) {
            console.log("❌ User not found in DB");
            return res.status(404).json({
                message: "User not found.",
                success: false,
            });
        }

        user.username = username || user.username;
        user.email = email || user.email;
        user.profile.bio = bio || user.profile.bio;

        await user.save();
        console.log("✅ Profile updated:", userId);

        res.status(200).json({
            message: "Profile updated successfully.",
            success: true,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                bio: user.profile?.bio || "",
            },
        });
    } catch (error) {
        console.error("❌ Error updating profile:", error.message);
        res.status(500).json({
            message: "Failed to update profile. Server error.",
            success: false,
        });
    }
};
