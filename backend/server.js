const port = 4900

const express = require('express')

const app = express()

const cors = require('cors')

const bodyparser = require('body-parser')

const User = require('./models/site')

app.use(cors())

app.use(bodyparser.urlencoded({
  extended: false
}))

app.use(bodyparser.json())

app.post('/registrar', async(req,res) => {

  try {
const user = await User.create(req.body) 
   res.send({sucesso: "Salvo com sucesso!"})
      console.log('Salvo!!!')
  }

  
  catch(err) {
       res.status(400).send({error: 'Deu erro'})
       console.log(err)
  }

})

app.listen(port, () => {
  console.log('Rodando', port)
})