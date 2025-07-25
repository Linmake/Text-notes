import File from "../../Schema/FileSchema.js"
import Folder from "../../Schema/FolderSchema.js"
import Project from "../../Schema/ProjectSchema.js"

const editTextController = async (req, res) => {
  try {
    const { Id, Text } = req.body
    const queryFile = { Id: Id }
  
    const file = await File.findOne(queryFile)
    const {FolderId} = file
    const queryFolder = { Id: FolderId }
    const folder = await Folder.findOne( queryFolder )

    if (!file){
      return res.status(400).json({ message: `File with Id: ${Id} doesn't exist` })
    }

    if (!folder){
      return res.status(400).json({ message: `Folder with Id: ${FolderId} doesn't exist` })
    }

    const project = await Project.findOne({Id: folder.ProjectId})

    if (!project){
      return res.status(400).json({ message: `Project with Id: ${folder.ProjectId} doesn't exist` })
    }

    const fileText = {}
      fileText.Text = Text
      const fileOnFolder = folder.Files.find(file => file.Id === Id)
      fileOnFolder.Text = Text

      const { Folders } = project
      const remainingFolders = Folders.filter( folder => folder.Id !== FolderId )
      const newFoldersInProject = [...remainingFolders, folder]
      project.Folders = newFoldersInProject
      
      await folder.save()
      await project.save()

    await File.findOneAndUpdate(queryFile, fileText, { new: true })
    
    return res.status(200).json({ message: "File updated successfully", "New Text File": fileText.Text })
  } catch (error) {
    return res.status(500).json({ message: `Server Error: ${error.message}` })
  }
}

export default editTextController