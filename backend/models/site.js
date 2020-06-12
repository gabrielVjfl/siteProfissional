let bd = require('./bd')


let usuario = bd.seq.define("Meusite", {

  id: {
    type: bd.sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey:true
  },
     nome: {
       type: bd.sequelize.STRING,
       allowNull: false
     },
     email: {
       type: bd.sequelize.STRING, 
       allowNull: false
     
     },
     data: {
       type: bd.sequelize.DATEONLY,
       default: Date.now()
     }
    }
)
// usuario.sync({force:true})

module.exports = usuario

