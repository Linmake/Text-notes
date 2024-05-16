
import Express from "express"
import validateIdeaDTO from "../dto/validate-idea-dto.js"
import { ideasDb, proyectosDb } from "../db/data-base.db.js"
import validatePutReq from "../middleware/idea/validate-put-req.js"
import getDate from "../middleware/functions/date.js"
import findIdeaNoAsig from "../middleware/functions/findIdeaNoAsig .js"
import findIdea from "../middleware/functions/findIdea.js"
import { findProyect } from "../middleware/functions/findProyect.js"
import findIdeaInProyect from "../middleware/functions/findIdeaInProyect.js"
import findCarpeta from "../middleware/functions/findCarpeta.js"

const ideaRouter = Express.Router()

ideaRouter.get( '/all', (req, res) => {
  res.status(200).send(ideasDb)
})

ideaRouter.get( '/:idIdea', (req, res) => {
  const { idIdea } = req.params
  const idea = findIdeaNoAsig(idIdea)
  res.status(200).send(idea)
})

ideaRouter.get( '/:idProyecto/:idIdea', (req, res) => {
  const { idProyecto, idIdea } = req.params
  const proyecto = findProyect(idProyecto)
  if(!proyecto) res.status(400).send(`Idea con Id: "${idProyecto}" no existe`)
  const idea = findIdeaInProyect(proyecto, idIdea) 
  if(!idea) res.status(400).send(`Idea con Id: "${idIdea}" no existe`)
  res.status(200).send(idea)
})

ideaRouter.get( '/:idProyecto/:idCarpeta/:idIdea', (req, res) => {
  const { idProyecto, idCarpeta, idIdea } = req.params
  const idea = findIdea(idProyecto, idCarpeta, idIdea)
  if(!idea) res.status(400).send(`Idea con Id: "${idIdea}" no existe`)
  res.status(200).send(idea)
})

ideaRouter.post('/create/', validateIdeaDTO, (req, res) => {
  const idea = req.body
  idea.Fecha = getDate
  idea.FechaModif = getDate
  ideasDb.push(idea)
  res.status(201).send(`Idea con id: "${req.body.Id}" creada con exito`)
})

ideaRouter.post('/create/:idProyecto', validateIdeaDTO, (req, res) => {
  const idea = req.body
  const {idProyecto} = req.params
  idea.Fecha = getDate
  idea.FechaModif = getDate
  const proyecto = findProyect(idProyecto)
  idea.IdProyecto = proyecto.Id
  proyecto.ArchivosAdd.push(idea)
  res.status(201).send(`Idea con id: "${idea.Id}" creada con exito`)
})

ideaRouter.post('/create/:idProyecto/idCarpeta', validateIdeaDTO, (req, res) => {
  const idea = req.body
  const {idProyecto, idCarpeta} = req.params
  idea.Fecha = getDate
  idea.FechaModif = getDate
  const proyecto = findProyect(idProyecto)
  const carpeta = findCarpeta(proyecto, idCarpeta)
  idea.IdProyecto = proyecto.Id
  idea.IdCarpeta = carpeta.Id
  carpeta.ArchivosDentro.push(idea)
  res.status(201).send(`Idea con id: "${idea.Id}" creada con exito`)
})

ideaRouter.put('/edit/:idIdea', validatePutReq, (req, res) => {
  const { idIdea } = req.params
  const { Id, Titulo, Texto } = req.body
  const propiedades = Object.keys(req.body)
  if(propiedades.length === 0) res.send('la petición está vácia')
  let idea = findIdeaNoAsig(idIdea)
  if(!idea) res.send('Idea no existente')
  //TODO Implemet asignar idea a un proyecto o carpeta
  idea.Id = Id || idea.Id
  idea.Titulo = Titulo || idea.Titulo
  idea.Texto = Texto || idea.Texto
  idea.FechaModif = getDate
  res.status(204).send('Editado con exito')
})

ideaRouter.put('/edit/:idProyecto/:idCarpeta/:idIdea', validatePutReq, (req, res) => {
  const { Id, Titulo, Texto } = req.body
  const {idProyecto, idCarpeta, idIdea} = req.params
  const idea = findIdea(idProyecto, idCarpeta, idIdea)
  if(!idea) res.send('Idea no existente')
  idea.Id = Id || idea.Id
  idea.Titulo = Titulo || idea.Titulo
  idea.Texto = Texto || idea.Texto
  idea.FechaModif = getDate
  res.status(204).send('Editado con exito')
})

ideaRouter.put('/edit/:idProyecto/:idIdea', validatePutReq, (req, res) => {
  const {idProyecto, idIdea} = req.params
  const { Id, Titulo, Texto } = req.body
  const proyecto = findProyect(idProyecto)
  const idea = findIdeaInProyect(proyecto, idIdea)
  if(!idea) res.send('Idea no existente')
  idea.Id = Id || idea.Id
  idea.Titulo = Titulo || idea.Titulo
  idea.Texto = Texto || idea.Texto
  idea.FechaModif = getDate

  res.status(204).send('Editado con exito')
})

ideaRouter.delete( '/delete/:idIdea', (req, res) => {
  const { idIdea } = req.params
  const idea = findIdeaNoAsig( idIdea )
  if(!idea) res.status(400).send('Idea no encontrada')

  const index = (ideasDb.indexOf(idea))
  ideasDb.splice(index, 1)

  res.status(400).send('Idea eliminada con exito')
})

ideaRouter.delete('/delete/:idProyecto/:idCarpeta/:idIdea', (req, res) => {
  const { idProyecto, idCarpeta, idIdea } = req.params
  const proyecto = findProyect(idProyecto)
  const {ArchivosDentro} = carpeta
  const carpeta = findCarpeta(proyecto, idCarpeta)
  const idea = findIdea(idProyecto, idCarpeta, idIdea)
  const index = (ArchivosDentro.indexOf(idea))
  ArchivosDentro.splice(index, 1)
  res.status(400).send(`Idea con el Id: ${idea.Id} eliminada con exito`)
})

ideaRouter.delete('/delete/:idProyecto/:idIdea', (req, res) => {
  const { idProyecto, idIdea } = req.params
  const proyecto = findProyect(idProyecto)
  const {ArchivosAdd} = proyecto
  const idea = findIdeaInProyect(proyecto, idIdea)
  const index = (ArchivosAdd.indexOf(idea))
  ArchivosAdd.splice(index, 1)
  res.status(400).send(`Idea con el Id: ${idea.Id} eliminada con exito`)
})

export default ideaRouter