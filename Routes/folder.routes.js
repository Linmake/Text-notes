import validateFolder from '../DTO/FolderValidation.js';
import express from "express";
import createController from '../Controllers/Folder/Create.controller.js';
import deleteController from '../Controllers/Folder/delete.controller.js';
import deleteAllOnProjectController from '../Controllers/Folder/deleteAllOnProject.controller.js';
import editController from '../Controllers/Folder/edit.controller..js';
import deleteAllController from '../Controllers/Folder/deleteAll.controller.js';
import getAllOnProjectController from '../Controllers/Folder/getAllOnProject.controller.js';
import getAllFoldersController from '../Controllers/Folder/getAllFolders.controller.js';
import userJWTDTO from '../DTO/userJWTDTO.js';

  const FolderRouter = express.Router();

  FolderRouter.get("/all", userJWTDTO, getAllFoldersController);

  FolderRouter.get("/all/:ProjectId", userJWTDTO, getAllOnProjectController);

  FolderRouter.post("/create/", userJWTDTO, validateFolder, createController);

  FolderRouter.put("/edit/:ProjectId/:FolderId", userJWTDTO, editController);

  FolderRouter.delete("/delete/:ProjectId/:FolderId/", userJWTDTO, deleteController);

  FolderRouter.delete("/delete/all/:ProjectId", userJWTDTO, deleteAllOnProjectController)

  FolderRouter.delete("/all/delete", userJWTDTO, deleteAllController)

  export default FolderRouter;