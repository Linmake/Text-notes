import Folder from '../Schema/FolderSchema.js'
import Project from '../Schema/ProjectSchema.js'
import validateFolder from '../dto/validateFolder.js';
import express from "express";
import { getDate } from '../middleware/Functions/Date.js';
const FolderRouter = express.Router();

FolderRouter.get("/all", async (req, res) => {
  const allFolders = await Folder.find({})
  res.status(200).send(allFolders);
});

FolderRouter.get("/:idProyect/all", async (req, res) => {
  const { idProyect } = req.params
  const project = await Project.findOne({ Id: idProyect })
  if (!project) return res.status(400).send(`Proyect con el id: ${idProyect} no existe`)
  const allFolders = project.Folders
  res.status(200).send(allFolders);
});

FolderRouter.post("/create/:idProyect", validateFolder, async (req, res) => {
  try {
    const { idProyect } = req.params
    const folder = req.body;
    if (!folder) return res.status(400).send("Folder no existe");
    const project = await Project.findOne({ Id: idProyect })
    if (!project) return res.status(400).send("Proyect no existe");
    await Folder.create(folder)
    project.Folders.push(folder)
    await project.save()
    res.status(201).send(`Folder con Id: "${folder.Id}" creado con exito en Proyect: "${project.Title}"`)
  } catch (error) {
    res.status(500).send(`Error del servidor: ${error.message}`);
  }
});

FolderRouter.put("/edit/:idProyect/:idFolder", async (req, res) => {
  try {
    const { idProyect, idFolder } = req.params;
    const { Title } = req.body
    if (!Title) return
    const project = await Project.findOne({ Id: idProyect })
    if (!project) {
      return res.status(404).send(`Proyect con Id: ${idProyect} no existe `);
    }
    const folderRef = project.Folders.find(folder => folder.Id == idFolder)
    if (!folderRef) {
      return res.status(404).send(`Folder con Id: ${idFolder} no existe `);
    }
    await Folder.findOneAndUpdate({ Id: idFolder }, { Title: Title, ModifyDate: getDate })
    folderRef.Title = Title;
    folderRef.ModifyDate = getDate;
    await project.save()
    res.status(200).send("Editado con exito");
  } catch (error) {
    res.status(500).send(`Error del servidor: ${error.message}`);
  }
});

FolderRouter.delete("/delete/:idProyect/:idFolder/", async (req, res) => {
  const { idProyect, idFolder } = req.params;
  const project = await Project.findOne({ Id: idProyect })
  if (!project) res.status(401).send(`Proyect con Id: ${idProyect} no existe `);
  const folderRef = project.Folders.find(folder => folder.Id == idFolder)
  if (!folderRef) res.status(401).send(`Folder con Id: ${idFolder} no existe `);
  await Folder.findOneAndDelete({ Id: idFolder })
  const index = project.Folders.indexOf(folderRef);
  project.Folders.splice(index, 1);
  await project.save()
  res.status(400).send(`Carpeta con Id: ${folderRef.Id} eliminada con exito`);
});

FolderRouter.delete("/all/delete/:idProyect", async (req, res) => {
  const { idProyect } = req.params;
  if (!idProyect) res.status(401).send(`Proyect con Id: ${idProyect}no existe`)
  const project = await Project.findOne({ Id: idProyect })
  project.Folders = [];
  await project.save()
  res.status(400).send("Todas las carpetas eliminadas con exito");
});

FolderRouter.delete("all/delete/", async (req, res) => {
  try {
    await Folder.deleteMany({})
    await Project.updateMany({ Folders: [] })
    res.status(400).send("Todas los folders eliminados con exito");
  } catch (error) {
    res.status(500).send(`Error del servidor: ${error.message}`);
  }
});

export default FolderRouter;