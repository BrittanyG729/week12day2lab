const express = require('express');
const app = express();


// Define a route for generic greeting
app.get('/', (req, res) => {
  res.send('Hello, stranger');
});

// Define a route with a parameter for personalized greeting
app.get('/greeting/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Wow! Hello there, ${name}!`);
});

// Start the server
app.listen(3000,function () {
  console.log(`listening on port 3000`);
});
const magic8BallResponses = [
    "It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes, definitely", 
    "You may rely on it", 
    "As I see it, yes", 
    "Most likely", 
    "Outlook good", 
    "Yes", 
    "Signs point to yes", 
    "Reply hazy, try again", 
    "Ask again later", 
    "Better not tell you now", 
    "Cannot predict now", 
    "Don't count on it", 
    "My sources say no", 
    "Outlook not so good", 
    "Very doubtful"
  ];
app.get('/magic/:question',(req, res)=>{
    const question= req.params.question.replace(/20%/g,'')
    .replace('#url#',options.url) 
    const randomReponse=magic8BallReponses[Math.floor(Math.random()*magic8BallReponses.lenght)];
    const htmlResponse = `<h1>Your Question: ${question}</h1><h1>Magic 8 Ball Response: ${randomResponse}</h1>`;
  res.send(htmlResponse);
});

// create route for tip
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = parseFloat(req.params.total);
    const tipPercentage = parseFloat(req.params.tipPercentage);
    const tipAmount = (total * tipPercentage) / 100;
  res.send(`<h1>Total: $${total}<h1>Tip Percentage:</h1> ${tipPercentage}%</h1><h1>Tip Amount: $${tipAmount.toFixed(2)}</h1>`);
})