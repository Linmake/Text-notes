import Folder from "../../Schema/FolderSchema.js";
import Project from "../../Schema/ProjectSchema.js";

const deleteController = async (req, res) => {
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
}

export default deleteController