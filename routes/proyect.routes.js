
import express from 'express'
import { proyectosDb } from '../db/data-base.db.js'
import validateProyectDTO from '../dto/validate-proyect-dto.js'
import validatePutReq from '../middleware/proyecto/validatePutReq.js'


const proyectRouter = express.Router()

proyectRouter.get( '/', (req, res) => {
  res.status(200).send(proyectosDb)
})

proyectRouter.post('/create', validateProyectDTO, (req, res) => {
  const proyecto = req.body
  proyectosDb.push(proyecto)
  res.status(204).send()
})

proyectRouter.put('/edit/:id', validatePutReq, (req, res) => {

  let proyecto = proyectosDb.find( proyecto => proyecto.Id == parseInt(req.params.id) )
  if(!proyecto) res.send(`Proyecto con id: ${req.params.id} no exite`)

  proyecto.Id = req.body.Id || proyecto.Id
  proyecto.Titulo = req.body.Titulo || proyecto.Titulo
  proyecto.Fecha = req.body.Fecha || proyecto.Fecha

  res.status(200).send(`Proyecto con el Id: "${ proyecto.Id }" editado con exito`)
})

proyectRouter.delete( '/delete/:id', (req, res) => {

  const proyecto = proyectosDb.find( proyecto => proyecto.Id === parseInt(req.params.id) )
  if(!proyecto) res.status(400).send(`Proyecto con id: ${req.params.id} no exite`)

  const index = (proyectosDb.indexOf(proyecto))
  proyectosDb.splice(index, 1)

  res.status(200).send('Proyecto eliminado con exito')
})

/**Hasta ahora completamente hecho y funcional solo faltaria una refactorización*/

export default proyectRouter
