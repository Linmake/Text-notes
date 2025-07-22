import Project from "../../Schema/ProjectSchema.js";

const editFolderInsideController = async (req, res) => {
    try {
      const { ProjectId, FolderId } = req.params;
      const { newFolder } = req.body
      if (!newFolder) return
      const project = await Project.findOne({ Id: ProjectId })
      if (!project) {
        return res.status(404).send(`Project with Id: ${ProjectId} don't exist`);
      }
      const oldFolder = project.Folders.find(folder => folder.Id == FolderId)
      if (!oldFolder) {
        return res.status(404).send(`Folder with Id: ${FolderId} don't exist`);
      }
      await Project.Folders.findOneAndUpdate({ Id: FolderId }, { newFolder })
      await project.save()
      res.status(200).send(project);
    } catch (error) {
      res.status(500).send(`Server Error: ${error.message}`);
    }
}

export default editFolderInsideController