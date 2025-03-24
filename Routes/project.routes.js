import express from 'express'
import Project from "../Schema/ProjectSchema.js"
import Folder from "../Schema/FolderSchema.js"
import File from "../Schema/FileSchema.js"
import validateProject from '../DTO/ProjectValidation.js'

const ProjectRouter = express.Router()

ProjectRouter.get('/all', async (req, res) => {
  try {
    const allProjects = await Project.find({})
    res.status(200).send(allProjects)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

ProjectRouter.get('/:idProject', async (req, res) => {
  try {
    const { idProject: idProject } = req.params
    const project = await Project.findOne({ Id: idProject })
    if (project) {
      return res.status(200).send(project)
    }
    return res.status(404).send(`Project no existe`)
  } catch (error) {
    res.status(500).send(err.message)
  }
})

ProjectRouter.post('/create', validateProject, async (req, res) => {
  try {
    const valideId = await Project.exists({ Id: req.body.Id })
    if (valideId) {
      return res.status(400).send("Existe un Proyecto con el mismo Id o titulo")
    }
    const newProyect = await Project.create(req.body)
    res.status(201).send(newProyect)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

ProjectRouter.put('/edit/:idProject', async (req, res) => {
  const { Title } = req.body
  const project = await Project.findOne({
    Id: req.params.idProject

  })
  const titleExist = await Project.exists({ Title: Title })
  if (!project) return res.send(`Proyecto con id: "${req.params.idProject}" no existe`)
  if (titleExist) return res.send(`Proyecto con titulo: "${Title}" ya existe`)
  const query = { Id: req.params.idProject }
  await Project.findOneAndUpdate(query, { Title: Title })
  res.status(200).send(`Proyecto con el Id: "${req.params.idProject}" editado con exito`)
})

ProjectRouter.delete('/all/delete/', async (req, res) => {
  await Project.deleteMany({})
  await Folder.deleteMany({})
  await File.deleteMany({})
  res.status(200).send('Todos los Projects eliminados con exito')
})

ProjectRouter.delete('/delete/:idProject', async (req, res) => {
  const { idProyect: idProject } = req.params
  const project = await Project.findOne({ Id: idProject })
  if (!project) return res.status(400).send(`Proyecto con id: ${idProject} no existe`)
  await Project.findOneAndDelete({ Id: req.params.idProject })
  res.status(200).send('Project eliminado con exito')
})

export default ProjectRouter