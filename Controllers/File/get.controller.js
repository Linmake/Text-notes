import File from "../../Schema/FileSchema.js"

const getFileController = async (req, res) => {
    try {
      const { FileId } = req.params
      const file = await File.findOne({ Id: FileId })
      return res.status(200).send(file)
    } catch (error) {
      res.status(500).send(`Server Error: ${error.message}`)
    }
  }

export default getFileController