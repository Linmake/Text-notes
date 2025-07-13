import Folder from "../../Schema/FolderSchema.js";
import Project from "../../Schema/ProjectSchema.js";

const deleteAllController = async (req, res) => {
  try {
    await Folder.deleteMany({})
    await Project.updateMany({}, { Folders: [] })
    res.status(200).send("All folders succesfully deleted");
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`);
  }
}

export default deleteAllController