import Folder from "../../Schema/FolderSchema.js";
import Project from "../../Schema/ProjectSchema.js";

const getAllFoldersController = async (req, res) => {
  const { ProjectId } = req.params
  const project = await Project.findOne({ Id: ProjectId })
  if (!project) return res.status(400).send(`Project with Id: ${ProjectId} don't exist`)
  const allFolders = project.Folders
  return res.status(200).send(allFolders);
}

export default getAllFoldersController