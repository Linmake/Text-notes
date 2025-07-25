import Folder from "../../Schema/FolderSchema.js"
import Project from "../../Schema/ProjectSchema.js"

const deleteProjectController = async (req, res) => {
  const { ProjectId } = req.params
  const project = await Project.findOne({ Id: ProjectId })
  if (!project) return res.status(400).send(`Project with Id: ${ProjectId} don't exist`)
  await Project.findOneAndDelete({ Id: ProjectId })
  if(project.Folders.length !== 0){
    await Folder.deleteMany({ProjectId: ProjectId})
    return res.status(200).send('Project succesfully deleted')
  }
  return res.status(200).send('Project succesfully deleted')
}

export default deleteProjectController