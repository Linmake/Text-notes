import Express from "express"
import validateIdeaDTO from "../dto/validate-idea-dto.js"
import { ideasDb } from "../db/data-base.db.js"
import validatePutReq from "../middleware/idea/validate-put-req.js"

const ideaRouter = Express.Router()


ideaRouter.get( '/', (req, res) => {
  res.status(200).send(ideasDb)
})

ideaRouter.post('/create', validateIdeaDTO, (req, res) => {
  res.status(201).send(`Idea "${req.body.Titulo}" creada con exito`)
  const idea = req.body
  ideasDb.push(idea)
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

ideaRouter.delete( '/delete/:id', (req, res) => {

  const idea = ideasDb.find( idea => idea.Id === parseInt(req.params.id) )
  if(!idea) res.status(400).send('Idea no encontrada')

  const index = (ideasDb.indexOf(idea))
  ideasDb.splice(index, 1)

  res.send('Idea eliminada con exito')

})

export default ideaRouter
