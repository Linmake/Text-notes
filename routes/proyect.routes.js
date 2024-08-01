import express from 'express'
//import validatePutReq from '../middleware/proyecto/validatePutReq.js'
import Proyect from "../Schema/ProyectSchema.js"
import Folder from "../Schema/FolderSchema.js"
import File from "../Schema/FileSchema.js"
import validateProyect from '../dto/validateProyect.js'

const ProyectRouter = express.Router()

ProyectRouter.get('/all', async (req, res) => {
  try {
    const allProyects = await Proyect.find({})
    res.status(200).send(allProyects)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

ProyectRouter.get('/:idProyect', async (req, res) => {
  try {
    const { idProyect } = req.params
    const proyect = await Proyect.findOne({ Id: idProyect })
    if (proyect) {
      return res.status(200).send(proyect)
    }
    return res.status(404).send(`Proyect no existe`)
  } catch (error) {
    res.status(500).send(err.message)
  }
})

ProyectRouter.post('/create', validateProyect, async (req, res) => {
  try {
    const valideId = await Proyect.exists({ Id: req.body.Id })
    if (valideId) {
      return res.status(400).send("Existe un Proyecto con el mismo Id o titulo")
    }
    const newProyect = await Proyect.create(req.body)
    res.status(201).send(newProyect)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

ProyectRouter.put('/edit/:idProyecto', async (req, res) => {
  const { Title } = req.body
  const proyecto = await Proyect.findOne({
    Id: req.params.idProyecto

  })
  const titleExist = await Proyect.exists({ Title: Title })
  if (!proyecto) return res.send(`Proyecto con id: "${req.params.idProyecto}" no existe`)
  if (titleExist) return res.send(`Proyecto con titulo: "${Title}" ya existe`)
  const query = { Id: req.params.idProyecto }
  await Proyect.findOneAndUpdate(query, { Title: Title })
  res.status(200).send(`Proyecto con el Id: "${req.params.idProyecto}" editado con exito`)
})

ProyectRouter.delete('/all/delete/', async (req, res) => {
  await Proyect.deleteMany({})
  await Folder.deleteMany({})
  await File.deleteMany({})
  res.status(200).send('Proyect eliminado con exito')
})

ProyectRouter.delete('/delete/:idProyect', async (req, res) => {
  const { idProyect } = req.params
  const proyect = await Proyect.findOne({ Id: idProyect })
  if (!proyect) return res.status(400).send(`Proyecto con id: ${idProyect} no existe`)
  await Proyect.findOneAndDelete({ Id: req.params.idProyect })
  res.status(200).send('Proyect eliminado con exito')
})

export default ProyectRouter