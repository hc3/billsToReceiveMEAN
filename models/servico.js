

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _servicoSchema = {
  descricao: {
    type:String,
    required:true
  },
  valor: {
    type:Number,
    required:true
  }
};

const Servico = new Schema(_servicoSchema);
module.exports = mongoose.model('Servico',Servico);