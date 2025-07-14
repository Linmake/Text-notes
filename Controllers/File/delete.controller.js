import File from "../../Schema/FileSchema.js"
import Folder from "../../Schema/FolderSchema.js";

const deleteController = async (req, res) => {
  try {
    const { FileId } = req.params;
    const file = await File.findOne({ Id: FileId })
    if (!file) return res.status(400).send(`File with Id: "${FileId}" don't exist`);
    const folder = await Folder.findOne({Id: file.FolderId});
    folder.Files = folder.Files.filter(file => file.Id !== FileId);
    await folder.save();
    await File.deleteOne({ Id: FileId });
    res.status(200).send('File with deleted successfully');
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`);
  }
}

export default deleteController