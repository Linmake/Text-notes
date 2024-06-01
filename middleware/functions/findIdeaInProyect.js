
/** //Doc
 * Retorna una Idea dentro del Proyecto proporcionado.
 * @param {"Object"} proyecto Proyecto indicado
 * @param {"Number"} idIdea Id Idea a encontrar
 * @returns {"Object"} Retorna la Idea encontrada  
 */
const findIdeaInProyect = (proyecto, idIdea) => {
  const {ArchivosAdd} = proyecto
  const idea = ArchivosAdd.find( idea => idea.Id == idIdea )
  if(!idea) "Idea no existe" //TODO implemt with ajv

  return idea
}

export default findIdeaInProyect