import ideasDb from "../db/data-base.db.js"

const deleteIdeaDTO = (req, res, next) => {
  const ideaDelete = req.body.titulo
  const isIdea = ideasDb.find( idea => idea.Titulo === ideaDelete )
  if(!isIdea) res.status(404).send('Idea no encontrada')
  
  ideasDb.filter( idea => idea.Titulo === ideaDelete )

  res.status(200).send('Idea eliminada')
  console.log(ideasDb)

  next()
}

export default deleteIdeaDTO