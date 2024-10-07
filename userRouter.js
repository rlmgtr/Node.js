import express from "express";
const router = express.Router();

router.get("/profileTest", (req, res) => {
res.send("this is the profileTest page");

});


export default router;