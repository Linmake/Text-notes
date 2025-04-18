import File from "../../Schema/FileSchema.js"
import Folder from "../../Schema/FolderSchema.js"

const deleteAllFilesController = async (req, res) => {
  try {
    await File.deleteMany({})
    await Folder.updateMany({ Files: [] })
    res.status(200)
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`)
  }
}

export default deleteAllFilesController