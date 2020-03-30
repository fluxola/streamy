const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001
const app = express();

// var chatroom = [{}];

var chatroom = {"session":[{"user":"bot","message":"welcome"}]}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Yo Dog, server is up'});
});

app.post('/api/chatroom/post', (req, res) => {
  var newMessage = `${req.body.post}`
  var user = `${req.body.userName}`
  obj = chatroom
  obj['session'].unshift({"user":user,"message":newMessage})
  chatroom = obj
  res.send(chatroom)
});

app.get('/api/chatroom/get', (req,res) => {
  res.send(chatroom)
});



app.listen(port, () => console.log(`Chatserver API listening on port ${port}!`))
