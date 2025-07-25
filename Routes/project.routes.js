import express from 'express'
import validateProject from '../DTO/ProjectValidation.js'
import editFolderInsideController from '../Controllers/Proyect/editFolderInside.controller.js'
import createController from '../Controllers/Proyect/create.controller.js'
import getAllProjectsController from '../Controllers/Proyect/getAllProjects.controller.js'
import editProjectController from '../Controllers/Proyect/editProject.controller.js'
import deleteProjectController from '../Controllers/Proyect/deleteProject.controller.js'
import getProjectController from '../Controllers/Proyect/getProject.controller.js'
import deleteAllProjectsController from '../Controllers/Proyect/deleteAllProjects.controller.js'
import userJWTDTO from '../DTO/userJWTDTO.js'

const ProjectRouter = express.Router()

ProjectRouter.get('/all', userJWTDTO, getAllProjectsController)

ProjectRouter.get('/:ProjectId', getProjectController)

ProjectRouter.post('/create', validateProject, userJWTDTO, createController)

ProjectRouter.put('/edit/:ProjectId', editProjectController);

ProjectRouter.put('/edit-folder/:ProjectId', editFolderInsideController)

ProjectRouter.delete('/delete/:ProjectId', deleteProjectController)

ProjectRouter.delete('/all/delete', deleteAllProjectsController)

export default ProjectRouter