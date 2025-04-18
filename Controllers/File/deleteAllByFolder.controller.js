import File from "../../Schema/FileSchema.js"
import Folder from "../../Schema/FolderSchema.js"

const deleteAllByFolderController = async (req, res) => {
  try {
    const { FolderId } = req.params
    const folder = await Folder.findOne({ Id: FolderId })
    if (!folder) return res.status(400).send(`Folder with Id: ${FolderId} don't exist`);
    const queryFolder = { Id: FolderId }
    await File.deleteMany({ IdFolder: FolderId })
    await Folder.findOneAndUpdate(queryFolder, { Files: [] })
    res.status(200).send(`All Files in Folder with Id: "${FolderId}" succesfully deleted`)
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`)
  }
}

export default deleteAllByFolderController