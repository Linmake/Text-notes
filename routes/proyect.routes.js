import express from 'express'
import proyectosDb from '../db/data-base.db.js'
import validateProyectDTO from '../dto/validate-proyect-dto.js'


const proyectRouter = express.Router()

ideaRouter.get( '/', (req, res) => {
  res.status(200).send(proyectosDb)
})

proyectRouter.post('/create', validateProyectDTO, (req, res) => {
  res.status(201).send(`Proyecto "${req.body.Titulo}" creado con exito`)
  const proyecto = req.body
  proyectosDb.push(proyecto)
})

ideaRouter.put('/edit/:id', validatePutReq, (req, res) => {
  const contenido = req.body
  const propiedades = Object.keys(contenido)
  if(propiedades.length === 0) res.send('la petición está vácia')
  let idea = ideasDb.find( idea => idea.Id == parseInt(req.params.id) )
  if(!idea) res.send('Idea no existente')

  idea.Id = req.body.Id || idea.Id
  idea.Titulo = req.body.Titulo || idea.Titulo
  idea.Texto = req.body.Texto || idea.Texto
  idea.Fecha = req.body.Fecha || idea.Fecha

  res.status(204).send('Editado con exito')
})

export default proyectRouter