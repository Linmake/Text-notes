import Folder from '../Schema/FolderSchema.js'
import Project from '../Schema/ProjectSchema.js'
import File from '../Schema/FileSchema.js'
import Express from "express"
import validateFile from "../dto/validateFile.js"

const FileRouter = Express.Router()

FileRouter.get('/all/', async (req, res) => {
  const allFiles = await File.find({})
  res.status(200).send(allFiles)
})

FileRouter.get('/:idFile/', async (req, res) => {
  try {
    const { idFile } = req.params
    const file = await File.findOne({ Id: idFile })
    res.status(200).send(file)
  } catch (error) {
    res.status(500).send(`Error del servidor: ${error.message}`)
  }
})

FileRouter.get('/all/:idFolder/', async (req, res) => {
  try {
    const { idFolder } = req.params
    const folder = await Folder.findOne({ Id: idFolder })
    if (!folder) return res.status(400).send(`Folder con el id: ${idFolder} no existe`)
    const allFiles = folder.Files
    res.status(200).send(allFiles)
  } catch (error) {
    res.status(500).send(`Error del servidor: ${error.message}`)
  }
})

FileRouter.post('/create/:idFolder/', validateFile, async (req, res) => {
  try {
    const file = req.body;
    const { idFolder } = req.params;
    const folder = await Folder.findOne({ Id: idFolder });
    if (!folder) return res.status(400).send(`Folder con Id: "${idFolder}" no existe`);
    const project = await Project.findOne({ Id: folder.IdProyect });
    if (!project) return res.status(400).send(`Proyect con Id: "${folder.IdProyect}" no existe`);

    const folderRef = project.Folders.find(f => f.Id == idFolder);
    if (!folderRef) {
      return res.status(400).send(`Folder dentro del proyecto con Id: "${idFolder}" no existe`);
    }
    await File.create(file);
    folder.Files.push(file)
    folderRef.Files.push(file);
    await folder.save();
    await project.save();
    res.status(201).send(`File con id: "${file.Id}" creado con éxito`);
  } catch (error) {
    res.status(500).send(`Error del servidor: ${error.message}`);
  }
})

FileRouter.put('/edit/:idFolder/:idFile/', async (req, res) => {
  try {
    const { idFile, idFolder } = req.params
    const { Title, Text } = req.body
    const folder = await Folder.findOne({ Id: idFolder })
    if (!folder) return res.status(400).send(`el folder no existe`);
    const project = await Project.findOne({ Id: folder.IdProyect })
    if (!project) return res.status(400).send(`el project no existe`);
    const fileRef = folder.Files.find(f => f.Id == idFile)
    fileRef.Title = Title || fileRef.Title
    fileRef.Text = Text || fileRef.Text
    const folderInProyect = project.Folders.find(f => f.Id == folder.Id)
    const fileRefProyect = folderInProyect.Files.find(f => f.Id == idFile)
    fileRefProyect.Title = Title || fileRefProyect.Title
    fileRefProyect.Text = Text || fileRefProyect.Text
    await File.findOneAndUpdate({ Id: idFile }, { Text: Text, Title: Title })
    await folder.save()
    await project.save()
    res.status(200).send(folder)
  } catch (error) {
    res.status(500).send(`Error del servidor: ${error.message}`);
  }
})

FileRouter.delete('/all/delete/', async (req, res) => {
  try {
    await File.deleteMany({})
    await Folder.updateMany({ Files: [] })
    const allProyects = await Project.find({})
    for (const project of allProyects) {
      for (const folder of project.Folders) {
        folder.Files = []
      }
      await project.save()
    }
    res.status(200).send('Todos los files eliminados con exito')
  } catch (error) {
    res.status(500).send(`Error del servidor: ${error.message}`)
  }
})

FileRouter.delete('/delete/:idFolder/:idFile/', async (req, res) => {
  try {
    const { idFolder, idFile } = req.params;
    const folder = await Folder.findOne({ Id: idFolder });
    if (!folder) return res.status(400).send(`Folder con Id: "${idFolder}" no existe`);
    await File.deleteOne({ Id: idFile });
    const project = await Project.findOne({ Id: folder.IdProyect });
    if (!project) return res.status(400).send(`Proyect con Id: "${folder.IdProyect}" no existe`);
    const folderInProyect = project.Folders.find(f => f.Id == idFolder);
    if (!folderInProyect) return res.status(400).send(`Folder con Id: "${idFolder}" no existe dentro del proyecto`);
    const fileIndex = folderInProyect.Files.findIndex(f => f.Id == idFile);
    if (fileIndex === -1) return res.status(400).send(`File con Id: "${idFile}" no existe dentro del folder`);
    folderInProyect.Files.splice(fileIndex, 1);
    const file = folder.Files.find(f => f.Id == idFile);
    if (!file) return res.status(400).send(`File con Id: "${idFile}" no existe en el folder`);
    folder.Files.pull(file._id);
    await folder.save();
    await project.save();
    res.status(200).send(`File con el Id: ${idFile} eliminado con éxito`);
  } catch (error) {
    res.status(500).send(`Error del servidor: ${error.message}`);
  }
})

FileRouter.delete('/all/delete/:idFolder/', async (req, res) => {
  try {
    const { idFolder } = req.params
    const folder = await Folder.findOne({ Id: idFolder })
    if (!folder) return res.status(400).send(`Folder con Id: "${idFolder}" no existe`);
    const project = await Project.findOne({ Id: folder.IdProyect })
    if (!project) return res.status(400).send(`el project no existe`);
    const folderInProyect = project.Folders.find(f => f.Id == idFolder)
    if (!folderInProyect) return res.status(400).send(`Folder con Id: "${idFolder}" no existe`);
    folderInProyect.Files = []
    folder.Files = []
    await folder.save()
    await project.save()
    await folderInProyect.save()
    await File.deleteMany({ IdFolder: idFolder })
    res.status(400).send(`Todos los Files del Folder con Id: "${idFolder}" eliminados con exito`)
  } catch (error) {
    res.status(500).send(`Error del servidor: ${error.message}`)
  }
})
export default FileRouter