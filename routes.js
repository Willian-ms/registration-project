module.exports = function(app,connection){

  //Página "index"
  app.get('', (req, res) => {
    res.render('index', { text: 'This is EJS' })
  })

  app.post("/newPerson",(req, res) => {
    let name = req.body.name
    let cpf = req.body.cpf

    var select_query = "INSERT INTO clientes (nome,cpf) VALUES ('"+name+"','"+cpf+"')";
    console.log(select_query);
    connection.query(select_query,function(err, recordset){
      if (err) {
        console.log(err);
      }else{
        res.render('index')
      }
    });

  })

  app.get("/getPerson",(req,res) =>{
      var select_query = "SELECT * FROM clientes ORDER BY id"
      console.log(select_query)
      connection.query(select_query,(err,recordset) => {
        if(err){
          console.log(err)
        } else {
          res.send(recordset)
        }
      })
  })
  

  //Página "About"
  app.get('/about', (req, res) => {
    res.render('about', { text: 'About page' })
  })
}
