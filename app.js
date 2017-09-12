const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var mustacheExpress = require('mustache-express');

app.use(express.static('public'))
app.use(bodyParser.json());

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.post('/task',function(req,res){
  console.log(req.body.title)
  console.log(req.body.priority)
})

app.get('/tasks',function(req,res){

  var tasks = []
  tasks.push({title: 'Wash the car',priority:'high'})
  tasks.push({title: 'Feed the dog',priority:'low'})

  res.send({'tasks':tasks})
})

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3001, function () {
  console.log('Example app listening on port 3000!')
})
