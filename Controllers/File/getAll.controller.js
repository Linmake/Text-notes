import File from "../../Schema/FileSchema.js"

const getAllFilesController = async (req, res) => {
    const allFiles = await File.find({})
    res.status(200).send(allFiles)
}

export default getAllFilesController