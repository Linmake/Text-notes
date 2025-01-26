import Folder from '../Schema/FolderSchema.js'
import Proyect from '../Schema/ProyectSchema.js'
import validateFolder from '../dto/validateFolder.js';
import express from "express";
import { getDate } from '../middleware/functions/date.js';
const FolderRouter = express.Router();

FolderRouter.get("/all", async (req, res) => {
  const allFolders = await Folder.find({})
  res.status(200).send(allFolders);
});

FolderRouter.get("/:idProyect/all", async (req, res) => {
  const { idProyect } = req.params
  const proyect = await Proyect.findOne({ Id: idProyect })
  if (!proyect) return res.status(400).send(`Proyect con el id: ${idProyect} no existe`)
  const allFolders = proyect.Folders
  res.status(200).send(allFolders);
});

FolderRouter.post("/create/:idProyect", validateFolder, async (req, res) => {
  try {
    const { idProyect } = req.params
    const folder = req.body;
    if (!folder) return res.status(400).send("Folder no existe");
    const proyect = await Proyect.findOne({ Id: idProyect })
    if (!proyect) return res.status(400).send("Proyect no existe");
    await Folder.create(folder)
    proyect.Folders.push(folder)
    await proyect.save()
    res.status(201).send(`Folder con Id: "${folder.Id}" creado con exito en Proyect: "${proyect.Title}"`)
  } catch (error) {
    res.status(500).send(`Error del servidor: ${error.message}`);
  }
});

FolderRouter.put("/edit/:idProyect/:idFolder", async (req, res) => {
  try {
    const { idProyect, idFolder } = req.params;
    const { Title } = req.body
    if (!Title) return
    const proyect = await Proyect.findOne({ Id: idProyect })
    if (!proyect) {
      return res.status(404).send(`Proyect con Id: ${idProyect} no existe `);
    }
    const folderRef = proyect.Folders.find(folder => folder.Id == idFolder)
    if (!folderRef) {
      return res.status(404).send(`Folder con Id: ${idFolder} no existe `);
    }
    await Folder.findOneAndUpdate({ Id: idFolder }, { Title: Title, ModifyDate: getDate })
    folderRef.Title = Title;
    folderRef.ModifyDate = getDate;
    await proyect.save()
    res.status(200).send("Editado con exito");
  } catch (error) {
    res.status(500).send(`Error del servidor: ${error.message}`);
  }
});

FolderRouter.delete("/delete/:idProyect/:idFolder/", async (req, res) => {
  const { idProyect, idFolder } = req.params;
  const proyect = await Proyect.findOne({ Id: idProyect })
  if (!proyect) res.status(401).send(`Proyect con Id: ${idProyect} no existe `);
  const folderRef = proyect.Folders.find(folder => folder.Id == idFolder)
  if (!folderRef) res.status(401).send(`Folder con Id: ${idFolder} no existe `);
  await Folder.findOneAndDelete({ Id: idFolder })
  const index = proyect.Folders.indexOf(folderRef);
  proyect.Folders.splice(index, 1);
  await proyect.save()
  res.status(400).send(`Carpeta con Id: ${folderRef.Id} eliminada con exito`);
});

FolderRouter.delete("/all/delete/:idProyect", async (req, res) => {
  const { idProyect } = req.params;
  const proyect = await Proyect.findOne({ Id: idProyect })
  proyect.Folders = [];
  await proyect.save()
  res.status(400).send("Todas las carpetas eliminadas con exito");
});

FolderRouter.delete("all/delete/", async (req, res) => {
  try {
    await Folder.deleteMany({})
    await Proyect.updateMany({ Folders: [] })
    res.status(400).send("Todas los folders eliminados con exito");
  } catch (error) {
    res.status(500).send(`Error del servidor: ${error.message}`);
  }
});

export default FolderRouter;