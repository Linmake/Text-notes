

import express from 'express'
const port = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) =>{
  res.send('Hello Word')
})

app.get('/idea', (req, res) => {
  res.send(['chocolate', 'té verde', 'matcha', 'fresas', 'frambuesas', 'moras', 'cafe', 'maracuya'])
})

app.get('/idea/id/:id', ( req, res ) => {
  res.send( `Tu Id: es ${req.params.id}` )
})

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`)
})