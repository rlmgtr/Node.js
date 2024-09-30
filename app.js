import express from "express"; 
// express function call is used to initialize an express backend application
// we are creating an express instance and assigning it to the app constant
const app = express();
// takes two parameters
// first number is port number
// second number is the callback function
// where we can indicate the code that will run once the server is successfully started.



app.listen(3000, () => {
console.log("server is running on port 3000");

});