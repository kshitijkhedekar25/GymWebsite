const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) //For serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine', 'pug') //set the template engine as pug
app.set('views', path.join(__dirname, 'views'))// set the views directory

//ENDPOINTS
app.get('/', (req , res)=>{
    const con = "This is the best content on the internet so for so use it wisely"
    const params = {'title':'Pubg is the best game', "content": con}
    res.status(200).render('index.pug',params);
})
app.post("/" , (req, res)=>{
    // console.log(req.body)
    name =req.body.name
    age =req.body.age
    gender =req.body.gender
    address =req.body.address
    let outputTowrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address} `
    fs.writeFileSync('output.txt',outputTowrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);
})

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started Successfully on port ${port}`);
})







