import express from "express";
const userRouter = express.Router();

// Main user page
userRouter.get("/", (req, res) => {
    res.send("User Profile Main page");
});

// User profile page
userRouter.get("/profile", (req, res) => {
    res.send("User Profile page");
});

// Update user profile
userRouter.put("/profile", (req, res) => {
    res.send("Update User Profile page");
});

// Delete user profile
userRouter.delete("/profile", (req, res) => {
    res.send("Delete User Profile page");
});

export default userRouter;
