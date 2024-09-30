import express from "express"; 
// express function call is used to initialize an express backend application
// we are creating an express instance and assigning it to the app constant
const app = express();
// takes two parameters
// first number is port number
// second number is the callback function
// where we can indicate the code that will run once the server is successfully started.


// add a route for a homepage 
// Browsers can only sent get requests by default when sending via the url input
// routes take two parameter is the callback function where we can specify what we want to do in that specific path
// uses two parameters = request and response
app.get('/', (req, res) => {

    res.send("hello world");
});



app.listen(3000, () => {
console.log("server is running on port 3000");

});