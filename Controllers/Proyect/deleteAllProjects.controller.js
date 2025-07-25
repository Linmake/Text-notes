import Folder from "../../Schema/FolderSchema"
import Project from "../../Schema/ProjectSchema"

const deleteAllProjectsController = async (req, res) => {
  await Project.deleteMany({})
  await Folder.deleteMany({})
  await File.deleteMany({})
  return res.status(200).send('All projects succesfully deleted')
}

export default deleteAllProjectsController