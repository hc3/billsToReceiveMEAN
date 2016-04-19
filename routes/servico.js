var Servico = require('../models/servico.js');

module.exports = function(app) {
  
  findAllServices = function(req,res) {
    console.log('GET - /servico');
    return Servico.find(function(err,servico){
      if(!err) {
        return res.send(servico);
      }else {
        res.statusCode = 500;
        console.log('Erro interno:',res.statusCode, err.message);
        return res.send({error:'Erro no arquivo /routes/servico.js'});
      }
    });
  };
  
  findById = function(req,res) {
    console.log('GET - /servico:id');
    var id = req.params.id;
    return Servico.findById({_id:id},function(err,servico) {
      if(!servico) {
        res.statusCode = 404;
        return res.send({error:'not found'});
      }
      if(!err) {
        return res.send({status:'OK',servico:servico});
      }else {
        res.statusCode = 500;
        console.log('Erro interno:',res.statusCode,err.message);
        return res.send({error:'Erro no arquivo /routes/servico.js'});
      }
    });
  };
  
  addServico = function(req,res) {
    console.log('POST - /servico');
    var servico = new Servico(req.body);
    servico.save(function(err){
      if(err){
        console.log('Erro enquanto tentava salvar'+err);
        res.send({error:err});
      }else {
        console.log('servico salvo com sucesso!');
        res.send({status:'OK',servico:servico});
      }
    });
  };
  
  updateServico = function(req,res) {
    console.log('PUT - /servico:id');
    return Servico.findById(req.params.id,function(err,servico){
      if(!servico){
        res.statusCode = 404;
        return res.send({error:'não existe servico - not found!'});
      }
      
      if(req.body.descricao !== null) servico.descricao = req.body.descricao;
      if(req.body.valor !== null) servico.valor = req.body.valor;
      
      return servico.save(function(err) {
        if(!err) {
          console.log('servico atualizado com sucesso!');
          return res.send({status:'OK',servico:servico});
        }
        else {
         res.statusCode = 500;
         res.send({error:'Erro no servidor!'});
        }
        res.send(servico);
      });
    });
  };
  
  deleteServico = function(req,res) {
  console.log('DELETE - /servico:id');
  var id = req.params.id;
    return Servico.findById({_id:id},function(err,servico){
      if(!servico){
        res.statusCode = 404;
        return res.send({error:'não existem clientes'});
      }
      return cliente.remove(function(err){
        if(!err){
          console.log('Cliente removido com sucesso!');
          return res.send({status:'OK'});
        }else {
          res.statusCode = 500;
          console.log('erro interno no servidor!!',res.statusCode,err.message);
          return res.send({error:'Erro no servidor!'});
        }
      });
    });
  };
  
  
  app.get('/api/servico',findAllServices);
  app.get('/api/servico/:id',findById);
  app.post('/api/servico',addServico);
  app.put('/api/servico/:id',updateServico);
  app.delete('/api/servico/:id',deleteServico);
    
};
