import Folder from '../Schema/FolderSchema.js'
import Project from '../Schema/ProjectSchema.js'
import File from '../Schema/FileSchema.js'
import Express from "express"
import validateFile from "../DTO/FileValidation.js"

const FileRouter = Express.Router()

FileRouter.get('/all/', async (req, res) => {
  const allFiles = await File.find({})
  res.status(200).send(allFiles)
})

FileRouter.get('/:FileId', async (req, res) => {
  try {
    const { FileId } = req.params
    const file = await File.findOne({ Id: FileId })
    res.status(200).send(file)
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`)
  }
})

FileRouter.get('/all/:FolderId', async (req, res) => {
  try {
    const { FolderId } = req.params
    const folder = await Folder.findOne({ Id: FolderId })
    if (!folder) return res.status(400).send(`Folder with Id: ${FolderId} don't exist`)
    const allFiles = folder.Files
    res.status(200).send(allFiles)
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`)
  }
})

FileRouter.post('/create/:FolderId', validateFile, async (req, res) => {
  try {
    const file = req.body;
    const { FolderId } = req.params;
    const folder = await Folder.findOne({ Id: FolderId });
    if (!folder) return res.status(400).send(`Folder con Id: "${FolderId}" no existe`);
    const project = await Project.findOne({ Id: folder.ProjectId });
    if (!project) return res.status(400).send(`Project con Id: "${folder.ProjectId}" no existe`);

    const folderRef = project.Folders.find(f => f.Id == FolderId);
    if (!folderRef) {
      return res.status(400).send(`Folder dentro del project con Id: "${FolderId}" no existe`);
    }
    await File.create(file);
    folder.Files.push(file)
    folderRef.Files.push(file);
    await folder.save();
    await project.save();
    res.status(201).send(`File con id: "${file.Id}" creado con éxito`);
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`);
  }
})

FileRouter.put('/edit/:FileId', async (req, res) => {
  try {
    const { FileId } = req.params
    const { Title, Text } = req.body
    const queryFile = { Id: FileId }

    const file = File.findOne(queryFile)
    (!file) ? res.status(400).send(`File with Id: ${FileId} don't exist`) : 
    await File.findOneAndUpdate(query, {
      Title: ( (!Title) ? file.Title : Title ),
      Text: ( (!Text) ? file.Text : Text )
    })
    return res.status(200)
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`)
  }
})//cuando edites un title por ejemplo para que se actualice el file dentro del folder traer desde la BD los files con el id del folder no directos del folder porque estaran desactualizados.

FileRouter.delete('/all/delete', async (req, res) => {
  try {
    await File.deleteMany({})
    await Folder.updateMany({ Files: [] })
    res.status(200)
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`)
  }
})

FileRouter.delete('/delete/:FileId', async (req, res) => {
  try {
    const { FileId } = req.params;
    const file = File.findOne({ Id: FileId })
    if (!file) return res.status(400).send(`File with Id: "${FileId}" don't exist`);
    await File.deleteOne({ Id: FileId });
    res.status(200)
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`);
  }
})

FileRouter.delete('/delete/all/:FolderId', async (req, res) => {
  try {
    const { FolderId } = req.params
    const folder = await Folder.findOne({ Id: FolderId })
    if (!folder) return res.status(400).send(`Folder with Id: ${FolderId} don't exist`);
    const queryFolder = { Id: FolderId }
    await File.deleteMany({ IdFolder: FolderId })
    await Folder.findOneAndUpdate(queryFolder, { Files: [] })
    res.status(200).send(`All Files in Folder with Id: "${FolderId}" succesfully deleted`)
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`)
  }
})
export default FileRouter