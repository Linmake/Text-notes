import Project from "../../Schema/ProjectSchema"

const getAllProjectsController = async (req, res) => {
  try {
    const allProjects = await Project.find({})
    return res.status(200).send(allProjects)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

export default getAllProjectsController