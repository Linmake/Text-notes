import File from "../../Schema/FileSchema.js"

const editTextController = async (req, res) => {
  try {
    const { Text, FileId } = req.body
    const queryFile = { Id: FileId }

    const file = File.findOne(queryFile)
    (!file) ? res.status(400).send(`File with Id: ${FileId} don't exist`) : 
    await File.findOneAndUpdate(query, {
      Text: ( (!Text) ? file.Text : Text )
    })
    return res.status(200)
  } catch (error) {
    res.status(500).send(`Server Error: ${error.message}`)
  }
}

export default editTextController