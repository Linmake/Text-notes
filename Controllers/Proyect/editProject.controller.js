import Project from "../../Schema/ProjectSchema"

const editProjectController = async (req, res) => {
  try {
    const { Title } = req.body;
    const { ProjectId } = req.params;

    const project = await Project.findOne({ Id: ProjectId });
    
    if (!project) {
      return res.status(400).send(`Project with Id: ${ProjectId} doesn't exist`);
    }
    
    const updatedProject = await Project.findOneAndUpdate(
      { Id: ProjectId },
      { Title },
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return res.status(500).send('Project could not be updated');
    }

    return res.status(200).send(updatedProject);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Server error');
  }
}

export default editProjectController