var express = require("express");
var app = express();
var port = process.env.PORT || 3000;



var quotes = ['yes', 'no', 'maybe'];

var jokes = [
 { setup: "What's the difference between a guitar and a fish?",
 punchline: "You can't tuna fish." },
 { setup: "What do you get when you cross a cow and a duck?",
 punchline: "Milk and quackers." },
 { setup: "How many tickles does it take to make an octupus laugh?",
 punchline: "Ten Tickles" }
];
app.get('/joke', function(req, res) {
 var randomIndex = Math.floor(Math.random() * jokes.length);
 res.json(jokes[randomIndex]);
});


app.get("/joke", function (req, res){
 var randomIndex = Math.floor(Math.random()*jokes.length);
 res.json(jokes[randomIndex]);
});



app.get("/quote", function (req, res){
 var randomIndex = Math.floor(Math.random()*quotes.length);
 res.send(quotes[randomIndex]);
});

app.get("/", function(req, res) {
  res.send("hello, universe");
})

app.listen(port, function() {
  console.log('server started on port ' + port);
});
