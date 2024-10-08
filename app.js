import express from "express";
import userRouter from "./routers/users.js";

const app = express();

app.use("/user", userRouter);





app.listen(3000, () => {
    console.log("Server 3000");
});

