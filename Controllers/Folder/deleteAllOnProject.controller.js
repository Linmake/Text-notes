import Project from "../../Schema/ProjectSchema.js";

const deleteAllOnProjectController = async (req, res) => {
  const { ProjectId } = req.params;
  if (!ProjectId) res.status(401).send(`Project with Id: ${ProjectId} don't exist`)
  const project = await Project.findOne({ Id: ProjectId })
  project.Folders = [];
  await project.save()
  res.status(400).send("All folders in the project succesfully deleted");
}

export default deleteAllOnProjectController