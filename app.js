import express from "express";
import dotenv from 'dotenv';



const app = express();

app.use("/", (res, req) => {

});



app.listen(3000, () => {
    console.log("Server 3000");
});

