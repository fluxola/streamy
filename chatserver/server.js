const express = require('express');
const bodyParser = require('body-parser');
const port = 3001
const app = express();

// app.get('/', (req, res) => res.send('Hello World!'))

var chatroom = [{}];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Yo Dog, server is up'});
});

// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

app.post('/api/chatroom/post', (req, res) => {
  console.log(req.body);
  // res.json(chatroom)
  var newMessage = `${req.body.post}`
  var user = `${req.body.userName}`
  console.log(newMessage,user)
  res.send(
    `${user} said ${newMessage}`,
  );
});



app.listen(port, () => console.log(`Chatserver API listening on port ${port}!`))
