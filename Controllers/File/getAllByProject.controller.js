import Folder from "../../Schema/FolderSchema.js"

const getFilesByProjectController = async (req, res) => {
  try {
    const { FolderId } = req.body
    const folder = await Folder.findOne({ Id: FolderId })
    if (!folder) return res.status(400).send(`Folder with Id: ${FolderId} don't exist`)
    const allFiles = folder.Files
    res.status(200).send(allFiles)
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`)
  }
}

export default getFilesByProjectController