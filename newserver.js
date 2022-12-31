const express = require('express')
const app = express();


app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.get("/home", function(req,resp){
    resp.sendFile("new.html",{root:__dirname});
});

app.listen(3001);
console.log("3001");