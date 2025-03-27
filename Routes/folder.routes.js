import Folder from '../Schema/FolderSchema.js'
import Project from '../Schema/ProjectSchema.js'
import validateFolder from '../DTO/FolderValidation.js';
import express from "express";
import { getDate } from '../middleware/Functions/Date.js';
const FolderRouter = express.Router();

FolderRouter.get("/all", async (req, res) => {
  const allFolders = await Folder.find({})
  return res.status(200).send(allFolders);
});

FolderRouter.get("/:ProjectId/all", async (req, res) => {
  const { ProjectId } = req.params
  const project = await Project.findOne({ Id: ProjectId })
  if (!project) return res.status(400).send(`Project with Id: ${ProjectId} don't exist`)
  const allFolders = project.Folders
  return res.status(200).send(allFolders);
});

FolderRouter.post("/create/:ProjectId", validateFolder, async (req, res) => {
  try {
    const { ProjectId } = req.params
    const folder = req.body;
    if (!folder) return res.status(400).send("Folder don't exist");
    const project = await Project.findOne({ Id: ProjectId })
    if (!project) return res.status(400).send("Project don't exist");
    await Folder.create(folder)
    project.Folders.push(folder)
    await project.save()
    res.status(201).send(`Folder with Id: "${folder.Id}" succesfully created in Project: "${project.Title}"`)
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`);
  }
});

FolderRouter.put("/edit/:ProjectId/:FolderId", async (req, res) => {
  try {
    const { ProjectId, FolderId } = req.params;
    const { Title } = req.body
    if (!Title) return
    const project = await Project.findOne({ Id: ProjectId })
    if (!project) {
      return res.status(404).send(`Project with Id: ${ProjectId} don't exist`);
    }
    const folderRef = project.Folders.find(folder => folder.Id == FolderId)
    if (!folderRef) {
      return res.status(404).send(`Folder with Id: ${FolderId} don't exist`);
    }
    await Folder.findOneAndUpdate({ Id: FolderId }, { Title: Title, ModifyDate: getDate })
    folderRef.Title = Title;
    folderRef.ModifyDate = getDate;
    await project.save()
    res.status(200).send("Edited with succesfully");
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`);
  }
});

FolderRouter.delete("/delete/:ProjectId/:FolderId/", async (req, res) => {
  const { ProjectId, FolderId } = req.params;
  const project = await Project.findOne({ Id: ProjectId })
  if (!project) return res.status(401).send(`Project with Id: ${ProjectId} don't exist`);
  const folderRef = project.Folders.find(folder => folder.Id == FolderId)
  if (!folderRef) return res.status(401).send(`Folder with Id: ${FolderId} don't exist`);
  await Folder.findOneAndDelete({ Id: FolderId })
  const index = project.Folders.indexOf(folderRef)
  project.Folders.splice(index, 1)
  await project.save()
  return res.status(200).send(`Folder with Id: ${folderRef.Id} deleted with succesfully`);
});

FolderRouter.delete("/delete/all/:ProjectId", async (req, res) => {
  const { ProjectId } = req.params;
  if (!ProjectId) res.status(401).send(`Project with Id: ${ProjectId} don't exist`)
  const project = await Project.findOne({ Id: ProjectId })
  project.Folders = [];
  await project.save()
  res.status(400).send("All folders in the project succesfully deleted");
});

FolderRouter.delete("delete/all", async (req, res) => {
  try {
    await Folder.deleteMany({})
    await Project.updateMany({ Folders: [] })
    res.status(400).send("All folders succesfully deleted");
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`);
  }
})

export default FolderRouter;