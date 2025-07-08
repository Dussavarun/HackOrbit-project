import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
    try {
        // First, try getting token from cookies or authorization header
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                message: "Authentication token is missing.",
                success: false,
            });
        }

        // Verify token and attach decoded user info to request object
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = { id: decoded.id }; // Attach user ID to the request object
        next();
    } catch (error) {
        console.error("Token verification failed:", error);
        res.status(401).json({
            message: "Invalid or expired token.",
            success: false,
        });
    }
};

export default isAuthenticated;
