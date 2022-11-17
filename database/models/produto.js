const Sequelize=require('sequelize');
const {database}=require('../db/dbconfig.js');

const Produto=database.define('produto',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    codigo:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    descricao:{
        allowNull:false,
        type:Sequelize.STRING(100),   
    },
    unidademedida:{
        type:Sequelize.INTEGER,
        allowNull:true,
        defaultValue:0
    },
    precoun:{
        type:Sequelize.INTEGER,
        allowNull:true,
        defaultValue:0
    },
    estoque:{
        type:Sequelize.INTEGER,
        allowNull:true,
        defaultValue:0
    },
});

module.exports=Produto;