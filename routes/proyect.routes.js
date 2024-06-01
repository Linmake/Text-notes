
import express from 'express'
import { proyectosDb } from '../db/data-base.db.js'
import validateProyectDTO from '../dto/validate-proyect-dto.js'
import validatePutReq from '../middleware/proyecto/validatePutReq.js'
import idValidate from '../middleware/proyecto/idValidate.js'
import {findProyect} from '../middleware/functions/findProyect.js'


const proyectRouter = express.Router()

proyectRouter.get( '/', (req, res) => {
  res.status(200).send(proyectosDb)
})

proyectRouter.post('/create', validateProyectDTO, (req, res) => {
  const proyecto = req.body

  const valide = idValidate(proyecto)
  if(!valide) return res.status(400).send(`Existe un Proyecto con el mismo Id: ${proyecto.Id}`)
  proyectosDb.push(proyecto)
  res.status(201).send()
})

proyectRouter.put('/edit/:idProyecto', validatePutReq, (req, res) => {
  const {Id, Titulo} = req.body
  let proyecto = findProyect(req.params.idProyecto)
  if(!proyecto) return res.send(`Proyecto con id: ${req.params.idProyecto} no existe`)
  proyecto.Id = Id || proyecto.Id
  proyecto.Titulo = Titulo || proyecto.Titulo

  res.status(200).send(`Proyecto con el Id: "${ proyecto.Id }" editado con exito`)
})

proyectRouter.delete( '/delete/:idProyecto', (req, res) => {
  const { idProyecto } = req.params
  const proyecto = findProyect(idProyecto)
  if(!proyecto) return res.status(400).send(`Proyecto con id: ${idProyecto} no existe`)
  
  const index = (proyectosDb.indexOf(proyecto))
  proyectosDb.splice(index, 1)
    
  res.status(200).send('Proyecto eliminado con exito')
})

export default proyectRouter