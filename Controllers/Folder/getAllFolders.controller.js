import Folder from "../../Schema/FolderSchema.js";

const getAllFoldersController = async (req, res) => {
  const allFolders = await Folder.find({})
  if (!allFolders) return res.status(400).send("There are no folders")
  return res.status(200).send(allFolders);
}

export default getAllFoldersController