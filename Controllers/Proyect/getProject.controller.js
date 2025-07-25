import Project from "../../Schema/ProjectSchema"

const getProjectController = async (req, res) => {
  try {
    const { ProjectId } = req.params
    const project = await Project.findOne({ Id: ProjectId })
    if (project) {
      return res.status(200).send(project)
    }
    return res.status(404).send(`Project with Id: ${ProjectId} don't exist`)
  } catch (error) {
      return res.status(500).send(err.message)
  }
}

export default getProjectController