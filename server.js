const express = require('express');
const app = express();


// Define a route for generic greeting
app.get('/greeting', (req, res) => {
  res.send('Hello, stranger');
});

// Define a route with a parameter for personalized greeting
app.get('/greeting/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Wow! Hello there, ${name}!`);
});

// Start the server
app.listen(port, () => {
  console.log(`listening on port 3000`);
});
