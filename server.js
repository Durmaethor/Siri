const messages = ["H-E-LL-O!", "I'm sorry, you suck!", "The schnozberries taste like schnozberries!", "Napolean, give me some of your tots!", "I'm Batman!", "What about second breakfast?", "You think thats air you are breathing?", "42", "May the Force be with you.", "Suck it, Johnny!", "Well, lets see....", "That's what she said."];

function getRandomMessage () {
    const randomNum = Math.floor(Math.random() * messages.length);
    return messages[randomNum];
}

const express = require('express');
const port = 8887;

const app = express();

app.listen(port, function(){
    console.log(`Listening on port: ${port}`);
});

app.options('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send();
});

app.get('/', function(req, res){
    res.status(200).set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'X-XSS-Protection': '1; mode=block',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify({ message: getRandomMessage() }));
});