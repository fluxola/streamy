const express = require('express');
// const path = require('path');
const port = 3001
const app = express();

app.get('/', (req, res) => res.send('Hello World!'))

var list = ['dog','cat','doofus'];


app.get('/api/getList', (req,res) => {
  res.json(list);
  console.log('list sent!')
})

app.listen(port, () => console.log(`Chatserver API listening on port ${port}!`))
