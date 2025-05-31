import express from 'express'
import Project from "../Schema/ProjectSchema.js"
import Folder from "../Schema/FolderSchema.js"
import File from "../Schema/FileSchema.js"
import validateProject from '../DTO/ProjectValidation.js'

const ProjectRouter = express.Router()

ProjectRouter.get('/all', async (req, res) => {
  try {
    const allProjects = await Project.find({})
    return res.status(200).send(allProjects)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

ProjectRouter.get('/:ProjectId', async (req, res) => {
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
})

ProjectRouter.post('/create', validateProject, async (req, res) => {
  try {
    const valideId = await Project.exists({ Id: req.body.Id })
    if (valideId) {
      return res.status(400).send(`Project with Id: ${req.body.Id}`)
    }
    const newProject = await Project.create(req.body)
    
    return res.status(201).send(newProject)
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

ProjectRouter.put('/edit/:ProjectId', async (req, res) => {
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
});

ProjectRouter.delete('/delete/:ProjectId', async (req, res) => {
  const { ProjectId } = req.params
  const project = await Project.findOne({ Id: ProjectId })
  if (!project) return res.status(400).send(`Project with Id: ${ProjectId} don't exist`)
  await Project.findOneAndDelete({ Id: ProjectId })
  if(project.Folders.length !== 0){
    await Folder.deleteMany({ProjectId: ProjectId})
    return res.status(200).send('Project succesfully deleted')
  }
  return res.status(200).send('Project succesfully deleted')
})

ProjectRouter.delete('/delete/all', async (req, res) => {
  await Project.deleteMany({})
  await Folder.deleteMany({})
  await File.deleteMany({})
  return res.status(200).send('All projects succesfully deleted')
})

export default ProjectRouter