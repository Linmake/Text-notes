import validateFolder from '../DTO/FolderValidation.js';
import express from "express";
import createController from '../Controllers/Folder/Create.controller.js';
import deleteController from '../Controllers/Folder/delete.controller.js';
import deleteAllOnProjectController from '../Controllers/Folder/deleteAllOnProject.controller.js';
import editController from '../Controllers/Folder/edit.controller..js';
import deleteAllController from '../Controllers/Folder/deleteAll.controller.js';
import getAllOnProjectController from '../Controllers/Folder/getAllOnProject.controller.js';
import getAllFoldersController from '../Controllers/Folder/getAllFolders.controller.js';

  const FolderRouter = express.Router();

  FolderRouter.get("/all", getAllFoldersController);

  FolderRouter.get("/all/:ProjectId", getAllOnProjectController);

  FolderRouter.post("/create/", validateFolder, createController);

  FolderRouter.put("/edit/:ProjectId/:FolderId", editController);

  FolderRouter.delete("/delete/:ProjectId/:FolderId/", deleteController);

  FolderRouter.delete("/delete/all/:ProjectId", deleteAllOnProjectController)

  FolderRouter.delete("/all/delete", deleteAllController)

  export default FolderRouter;