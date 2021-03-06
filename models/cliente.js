/**
 * @descrição: entidade cliente.
 * 
 *
**/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _clienteSchema = {
  nome: {
    type:String,
    require:true
  },
  cpf: {
    type:String
  },
  endereco:{
    rua:{type:String},
    bairro:{type:String}
  },
  contato : {
    celular:{type:String},
    email:{type:String}
  }
  
};


const Cliente = new Schema(_clienteSchema);

module.exports = mongoose.model('Cliente',Cliente);


