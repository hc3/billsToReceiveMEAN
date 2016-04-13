/**
 * 
 * 
 * 
**/

var Cliente = require('../models/cliente.js');

module.exports = function(app) {
  
  findAllClientes = function(req,res) {
    console.log("GET - /cliente");
    return Cliente.find(function(err,cliente) {
      if(!err) {
        return res.send(cliente);
      }else {
        res.statusCode = 500;
        console.log('erro interno:',res.statusCode,err.message);
        return res.send({error:'Erro no arquivo /routes/cliente.js'});
      }
    })
  };
  
  findById = function(req,res) {
    console.log("GET - /cliente/:id");
    return Cliente.findById({_id:id},function(err,cliente){
      if(!cliente) {
        res.statusCode = 404;
        return res.send({error:'not found'});
      }
      
      if(!err) {
        return res.send({status:'OK',cliente:cliente});
      }else {
        res.statusCode = 500;
        console.log('Erro interno :',res.statusCode,err.message);
        return res.send({error:'Erro no arquivo /routes/cliente.js'});
      }
    })
  };
  
  addCliente = function(req,res) {
    console.log('POST - /cliente');
    var cliente = new Cliente({
      nome : req.body.nome,
      cpf : req.body.cpf
    });
    cliente.save(function(err) {
      
      if(err) {
        console.log('Erro enquanto tentava salvar'+err);
        res.send({error:err});
      } else {
        console.log('cliente criado com sucesso!');
        res.send({status:'OK',cliente:cliente});
      }
      
    });
  };
  
  
  
  
  app.get('/cliente',findAllClientes);
  app.get('/cliente/:id',findById);
  app.post('/cliente',addCliente);
}