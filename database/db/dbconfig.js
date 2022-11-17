const { Sequelize } = require('sequelize');


// Option 1: Passing a connection URI
//Existem dados sensíveis aqui - pensar em usar .env e keyvault
//tpk2022=nome do database
//rodjle=usuario
//senha=88*[]]$goRSpo##?xx  //cuidado , dados sensiveis
const database = new Sequelize('tpk2022','eduardofaorocuidatorres','@Panvel123',{
    dialect:'mysql',
    host:'cuidatorresfaoro.mysql.database.azure.com',
    port:'3306'
}); // Example for mysql

async function check(){
  console.log('***Tentando autenticar***');
try {
    await database.authenticate();
    console.log('*** Conexão com banco de dados estabelecida com sucesso***');
  } catch (error) {
    console.error('Erro: Não foi possível estabelecer uma conexão com banco de dados:', error);
  }
}

module.exports={database,check};
