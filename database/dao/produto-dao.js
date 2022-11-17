const database = require("../db/dbconfig");
const Produto = require("../models/produto");

//sugestão -- que tal criar uma interface e implementar?

async function gravarDados(dados) {
  try {
    const novoProduto = await Produto.create({
      id: dados.id,
      codigo: dados.codigo,
      descricao: dados.descricao,
      unidademedida: dados.unidademedida,
      precoun: dados.precoun,
      estoque: dados.estoque,
    });
    return true;
  } catch (error) {
    console.log("Erro ao incluir um produto: "+error)
    return false;
  }
}

async function buscaTodosDados() {
  return await Produto.findAll();
}

module.exports = {
  gravarDados,
  buscaTodosDados,
};
