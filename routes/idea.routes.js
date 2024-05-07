import Express from "express"
import validateIdeaDTO from "../middleware/validate-idea-dto.js"
import ideasDb from "../db/data-base.db.js"
import deleteIdeaDTO from "../middleware/delete-dto.js"

const ideaRouter = Express.Router()

ideaRouter.get( '/', (req, res) => {
  res.status(200).send('Pagina de ideas')
})

ideaRouter.post('/create', validateIdeaDTO, (req, res) => {
  res.status(201).send(`Idea "${req.body.Titulo}" creada con exito`)
  const idea = req.body
  ideasDb.push(idea)
  console.log(ideasDb)
})

ideaRouter.delete('/delete', deleteIdeaDTO, (req, res) => {
  res.status(201).send(`Idea "${req.body.Titulo}" creada con exito`)
  const idea = req.body
  ideasDb.push(idea)
  console.log(ideasDb)
})

export default ideaRouter