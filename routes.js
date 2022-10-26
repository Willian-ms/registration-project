module.exports = function(app,connection){

   /////////////////////////////
  ///// Página "Index" /////
  ////////////////////////////
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

  
   /////////////////////////////
  ///// Página "Cadastros" /////
  ////////////////////////////
  app.get('/cadastros', (req, res) => {
    res.render('cadastros', { text: 'About page' })
  })
  


  /////////////////////////////
  ///// Página "Produtos" /////
  ////////////////////////////

  app.get('/produtos',(req,res) =>{
    res.render('produtos',{text: 'Pág prod'})
  })
  
  app.get("/getProduto",(req,res) =>{
    var select_query = "SELECT * FROM produtos ORDER BY id"
    console.log(select_query)
    connection.query(select_query,(err,recordset) => {
      if(err){
        console.log(err)
      }else{
        res.send(recordset)
      }
    })  
  })

  app.post("/newProduto",(req, res) => {
    let nome = req.body.nomeProduto
    let grupo = req.body.grupoProduto
    let peso = req.body.pesoProduto
    let un = req.body.un

    var select_query = "INSERT INTO produtos (nome, grupo, peso, unidade_medida) VALUES ('"+nome+"','"+grupo+"','"+peso+"','"+un+"')";
    console.log(select_query);
    connection.query(select_query,function(err, recordset){
      if (err) {
        console.log(err);
      }else{
        res.render('./produtos')
      }
    });
  })

  app.post('/updateProduto',(req,res) =>{
    let id = req.body.idModal
    let name = req.body.modalNome
    let grupo = req.body.modalGrupo
    let peso = req.body.modalPeso
    let un = req.body.modalUn
    console.log(name)

    var select_query = "UPDATE produtos SET nome='"+name+"', grupo='"+grupo+"',unidade_medida='"+un+"',peso='"+peso+"'WHERE id='"+id+"'"
    console.log(select_query);
    connection.query(select_query,function(err, recordset){
      if (err) {
        console.log(err);
      }else{
        res.render('./produtos')
      }
    });
  })

  app.post("/deleteProduto",(req,res) =>{
    let id = req.body.idModal

    var select_query = "DELETE FROM produtos WHERE id='"+id+"'"
    console.log(select_query);
    connection.query(select_query,function(err, recordset){
      if (err) {
        console.log(err);
      }else{
        res.render('./produtos')
      }
    });
  })

   
  /////////////////////////////
  ///// Página "Pedidos" /////
  ////////////////////////////

  app.get('/pedidos',(req,res) =>{
    res.render('pedidos',{text: 'Pág pedidos'})
  })
 






}

