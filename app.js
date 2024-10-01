import express from "express"; 
// express function call is used to initialize an express backend application
// we are creating an express instance and assigning it to the app constant
const app = express();

app.use(express.json());

app.post("/user", (req, res) => {


const name = req.body.name;
const email = req.body.email;

// or const { name, email } = req.body;


res.send(`user created ${name}, email: ${email}`)

})

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

app.get("/contact", (req, res) => {
res.send("<h1>this is now the contact page</h1>")


})

app.listen(3000, () => {
console.log("server is running on port 3000");

});

app.get("/info?", (req, res) => {
res.send("this is the log in page. The '?' symbol allows the character prior to it to be optional when typing it. Try /inf and you will still be routed in this same page.")
})

app.get("/information+", (req, res) => {
    res.send("this is now the information page. The '+' sign mean you can add the same character taht is same to the one prior to the plus sign - even multiple times. Try typing /insformationnnn and you will still be here in the same page")
}  )

app.get("/information*s", (req, res) => {
    res.send("the asterisk symbol will allow you to get to this route even you added different and multiple characters after where the asterisk is placed, given that the characters after the asteris is not removed. Try informattionabcds and you will still be routed in this same path")
}  )

app.get("/sample-?path", (req, res, next) => {
    res.send("this is a samplepath")

    next(); // review this! /: - lands you to the unique page content
});

app.get("/contacts/:contactID", (req, res) => {
res.send(`this is the contact Id that we are receiving ${req.params.contactID}`)

})

app.get("/phonebook", (req, res) => {
    const skip = req.query.skip || 0;
    const limit = req.query.limit || 0;

    res.send(`phonebook skip: ${skip}, limit: ${limit}`);
})
