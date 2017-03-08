const express = require('express');
const port = 8887;

const app = express();

app.listen(port, function(){
    console.log(`Listening on port: ${port}`);
});