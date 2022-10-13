module.exports = function(app,connection){

  //Página "index"
  app.get('', (req, res) => {
    res.render('index', { text: 'This is EJS' })
  })

  app.get("/getPerson",(req,res) =>{
    var select_query = "SELECT * FROM clientes ORDER BY id"
    console.log(select_query)
    connection.query(select_query,(err,recordset) => {
      if(err){
        console.log(err)
      }else{
        res.send(recordset)
      }
    })  
  })

  app.post("/newPerson",(req, res) => {
    let name = req.body.name
    let cpf = req.body.cpf
    let email = req.body.email
    let cep = req.body.cep
    let address = req.body.address
    let numberAddress = req.body.numberAddress
    let city = req.body.city
    let state = req.body.state

    var select_query = "INSERT INTO clientes (nome,cpf,email, cep, endereco, numero, cidade, estado) VALUES ('"+name+"','"+cpf+"','"+email+"','"+cep+"','"+address+"','"+numberAddress+"','"+city+"','"+state+"')";
    console.log(select_query);
    connection.query(select_query,function(err, recordset){
      if (err) {
        console.log(err);
      }else{
        res.render('./index')
      }
    });
  })

  app.post('/updatePerson',(req,res) =>{
    let id = req.body.idmodal
    let name = req.body.modalname
    let cpf = req.body.modalcpf
    let email = req.body.modalemail
    let cep = req.body.modalcep
    let address = req.body.modaladdress
    let numberAddress = req.body.modalnumberAddress
    let city = req.body.modalcity
    let state = req.body.modalstate

    console.log(name)

    var select_query = "UPDATE clientes SET nome='"+name+"', cpf='"+cpf+"',email='"+email+"',cep='"+cep+"',endereco='"+address+"',numero='"+numberAddress+"',cidade='"+city+"',estado='"+state+"' WHERE id='"+id+"'"
    console.log(select_query);
    connection.query(select_query,function(err, recordset){
      if (err) {
        console.log(err);
      }else{
        res.render('./index')
      }
    });
  })

  app.post("/deletePerson",(req,res) =>{
    let id = req.body.idmodal

    var select_query = "DELETE FROM clientes WHERE id='"+id+"'"
    console.log(select_query);
    connection.query(select_query,function(err, recordset){
      if (err) {
        console.log(err);
      }else{
        res.render('./index')
      }
    });
  })

  
  

  //Página "About"
  app.get('/about', (req, res) => {
    res.render('about', { text: 'About page' })
  })
}
