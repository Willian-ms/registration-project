// imports
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql')
const port = 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'root',
  database: 'bd_project'
});

connection.connect(function(err){
  if(err) throw err;
  console.log("connected");
});

//Arquivos estáticos
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

//Determina "views", que seriam as páginas que podem ser acessadas
app.set('views', './views')
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

// Servidor habilitado na porta 3000
app.listen(port, () => console.info(`The magic happens on port ${port}`))

// Routes 
require('./routes.js')(app, connection)
