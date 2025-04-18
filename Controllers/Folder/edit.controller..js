import Folder from "../../Schema/FolderSchema.js";
import Project from "../../Schema/ProjectSchema.js";

const editController = async (req, res) => {
  try {
    const { ProjectId, FolderId } = req.params;
    const { Title } = req.body
    if (!Title) return
    const project = await Project.findOne({ Id: ProjectId })
    if (!project) {
      return res.status(404).send(`Project with Id: ${ProjectId} don't exist`);
    }
    const folderRef = project.Folders.find(folder => folder.Id == FolderId)
    if (!folderRef) {
      return res.status(404).send(`Folder with Id: ${FolderId} don't exist`);
    }
    await Folder.findOneAndUpdate({ Id: FolderId }, { Title: Title, ModifyDate: getDate })
    folderRef.Title = Title;
    folderRef.ModifyDate = getDate;
    await project.save()
    res.status(200).send("Edited with succesfully");
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`);
  }
}

export default editController