const messages = ["H-E-LL-O!", "I'm sorry, you suck!", "The schnozberries taste like schnozberries!", "Napolean, give me some of your tots!", "I'm Batman!", "What about second breakfast?", "You think thats air you are breathing?"];

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

app.get('/', function(req, res){
    res.send(JSON.stringify({
        message: getRandomMessage()
    }))
});