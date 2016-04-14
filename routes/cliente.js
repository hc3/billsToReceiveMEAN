/**
 * 
 * @
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
    var id = req.params.id;
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
  
  updateCliente = function(req,res) {
    console.log("PUT - /cliente/:id");
    return Cliente.findById(req.params.id,function(err,cliente){
      if(!cliente) {
        res.statusCode = 404;
        return res.send({error:"não existe cliente - not found"});
      }
      if(req.body.nome != null) cliente.nome = req.body.nome;
      if(req.body.cpf != null) cliente.cpf = req.body.cpf;
      
      return cliente.save(function(err) {
        if(!err) {
          console.log("cliente atualizado");
          return res.send({status:"OK", cliente:cliente});
        } else {
          if(err.name == 'erro de validação') {
            res.statusCode = 400;
            res.send({error:'erro de validação!'});
          } else {
            res.statusCode = 500;
            res.send({error:"erro no servidor"});
          }
          console.log("Erro interno",res.statusCode,err.message);
        }
        res.send(cliente);
      });
    });
  };
  
  deleteCliente = function(req,res) {
    console.log("DELETE - /cliente/:id");
    var id = req.params.id;
    return Cliente.findById({_id:id},function(err,cliente){
      if(!cliente) {
        res.statusCode = 404;
        return res.send({error:"não existe cliente"});
      }
      return cliente.remove(function(err){
        if(!err) {
          console.log("Cliente removido com sucesso!");
          return res.send({status:"OK"});
        } else {
          res.statusCode = 500;
          console.log("erro ",res.statusCode,err.message);
          return res.send({error:"Erro no servidor"});
        }
      });
    });
  };
  
  
  
  app.get('/cliente',findAllClientes);
  app.get('/cliente/:id',findById);
  app.post('/cliente',addCliente);
  app.put('/cliente/:id',updateCliente);
  app.delete('/cliente/:id',deleteCliente);
}