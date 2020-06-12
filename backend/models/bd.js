const sequelize = require('sequelize')

const seq = new sequelize("techtin", "root","Info@3304",{
    dialect: 'mysql',
    host: 'localhost',
    
})

//seq.authenticate().then((suc) => {
  //  console.log('Conectou!!', suc)

//}).catch((err) => {
  //  console.log('Erro', err)
// })

module.exports = {
    sequelize:sequelize,
    seq:seq
}