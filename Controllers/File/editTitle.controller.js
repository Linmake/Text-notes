import File from "../../Schema/FileSchema.js"

const editTitleController = async (req, res) => {
  try {
    const { Title, FileId } = req.body
    const queryFile = { Id: FileId }

    const file = File.findOne(queryFile)
    (!file) ? res.status(400).send(`File with Id: ${FileId} don't exist`) : 
    await File.findOneAndUpdate(query, {
      Title: ( (!Title) ? file.Title : Title )
    })
    return res.status(200)
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`)
  }
}

export default editTitleController