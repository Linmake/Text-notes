import Express from "express"
import validateFile from "../DTO/FileValidation.js"
import getAllFilesController from '../Controllers/File/getAll.controller.js'
import getFileByProjectController from '../Controllers/File/getAllByProject.controller.js'
import getFileController from '../Controllers/File/get.controller.js'
import createController from '../Controllers/File/create.controller.js'
import editTitleController from '../Controllers/File/editTitle.controller.js'
import editTextController from '../Controllers/File/editText.controller.js'
import deleteAllFilesController from '../Controllers/File/deleteAll.controller.js'
import deleteAllByFolderController from '../Controllers/File/deleteAllByFolder.controller.js'
import deleteController from '../Controllers/File/delete.controller.js'

const FileRouter = Express.Router()

  FileRouter.get('/all/', getAllFilesController)

  FileRouter.get('/get/:FolderId', getFileController)

  FileRouter.get('/all/:FolderId', getAllFilesController)

  FileRouter.post('/create', validateFile, createController)

  FileRouter.put('/edit-text', editTextController)

  FileRouter.put('/edit-title', editTitleController)

  FileRouter.delete('/all/delete', deleteAllFilesController)

  FileRouter.delete('/delete/:FileId', deleteController)

  FileRouter.delete('/delete/all/:FolderId', deleteAllByFolderController)

export default FileRouter