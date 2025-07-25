import File from "../../Schema/FileSchema.js"
import Folder from "../../Schema/FolderSchema.js"
import Project from "../../Schema/ProjectSchema.js"

const deleteAllProjectsController = async (req, res) => {
  await Project.deleteMany({})
  await Folder.deleteMany({})
  await File.deleteMany({})
  return res.status(200).send('All projects succesfully deleted')
}

export default deleteAllProjectsController