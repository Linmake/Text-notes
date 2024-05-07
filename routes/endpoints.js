import expressApp from "../index.js"

const coches = [
  {id: 0, marca: 'Volvo', color: 'gris', year: 2024},
  {id: 1, marca: 'Tesla', color: 'blanco', year: 2024},
  {id: 2, marca: 'Nissan', color: 'plateado', year: 2023}
]

/*expressApp.get('/coches/marca/:marca', (req, res) => {
  const coche = coches.find( coche => coche.marca === req.params.marca )
  if(!coche) return res.status(400).send('Marca de coche no válida')
  return res.status(200).send(coche)
})

expressApp.get('/', (req, res) =>{
  res.send('Hello Word')
})

expressApp.get('/sabor', (req, res) => {
  res.send(['chocolate', 'té verde', 'matcha', 'fresas', 'frambuesas', 'moras', 'cafe', 'maracuya'])
})

expressApp.get('/id/:id', ( req, res ) => {
  res.send( `Tu Id: es ${req.params.id}` )
})

expressApp.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`)
})
*/

export default miPrimerMiddleware