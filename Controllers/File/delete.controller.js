import File from "../../Schema/FileSchema.js"

const deleteController = async (req, res) => {
  try {
    const { FileId } = req.params;
    const file = File.findOne({ Id: FileId })
    if (!file) return res.status(400).send(`File with Id: "${FileId}" don't exist`);
    await File.deleteOne({ Id: FileId });
    res.status(200)
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`);
  }
}

export default deleteController