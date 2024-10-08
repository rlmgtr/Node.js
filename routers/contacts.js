import express from "express";
const userRouter = express.Router

userRouter.get("/profile", (req, res)=> {
res.send("User Profile page")
});

userRouter.put("/profile", (req, res) => {
    res.send("Update User Profile page")
});

userRouter.delete("/profile", (req, res) => {
    res.send("delete User Profile page")
});