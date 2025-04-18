import File from "../../Schema/FileSchema.js"
import Folder from "../../Schema/FolderSchema.js";
import Project from "../../Schema/ProjectSchema.js";

const createController = async (req, res) => {
  try {
    const file = req.body;
    const { FolderId } = file
    const folder = await Folder.findOne({ Id: FolderId });
    if (!folder) return res.status(400).send(`Folder con Id: "${FolderId}" no existe`);
    const project = await Project.findOne({ Id: folder.ProjectId });
    if (!project) return res.status(400).send(`Project con Id: "${folder.ProjectId}" no existe`);

    const folderRef = project.Folders.find(f => f.Id == FolderId);
    if (!folderRef) {
      return res.status(400).send(`Folder dentro del project con Id: "${FolderId}" no existe`);
    }
    await File.create(file);
    folder.Files.push(file)
    folderRef.Files.push(file);
    await folder.save();
    await project.save();
    res.status(201).send(`File con id: "${file.Id}" creado con éxito`);
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`);
  }
}

export default createController