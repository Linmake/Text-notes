import File from "../../Schema/FileSchema.js"
import Folder from "../../Schema/FolderSchema.js";
import Project from "../../Schema/ProjectSchema.js";

const createController = async (req, res) => {
  try {
    const { Id, FolderId, Title, Text } =  req.body
    const { UserId } = req
    const fileData = {
      Id: Id,
      FolderId: FolderId,
      Title: Title, 
      Text: Text,
      UserId: UserId,
    }
    const folder = await Folder.findOne({ Id: FolderId });
    if (!folder) return res.status(400).send(`Folder con Id: "${FolderId}" no existe`);
    const project = await Project.findOne({ Id: folder.ProjectId });
    if (!project) return res.status(400).send(`Project con Id: "${folder.ProjectId}" no existe`);

    const folderRef = project.Folders.find(f => f.Id == FolderId);
    if (!folderRef) {
      return res.status(400).send(`Folder dentro del project con Id: "${FolderId}" no existe`);
    }
    await File.create(fileData);
    folder.Files.push(fileData)
    folderRef.Files.push(fileData);
    await folder.save();
    await project.save();
    res.status(201).send(`File con id: "${Id}" creado con éxito`);
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`);
  }
}

export default createController