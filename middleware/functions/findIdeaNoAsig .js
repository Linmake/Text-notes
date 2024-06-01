
import { ideasDb } from "../../db/data-base.db.js"

/**
 * Retorna el archivo sin asignación del Id proporcionado
 * @param {"String"} idIdea Id del archivo
 * @returns {"Object"} archivo sin ser asignado a un proyecto
 */
const findIdeaNoAsig = ( idIdea ) => {
  const idea = ideasDb.find(idea => idea.Id == idIdea)
  if(!idea) "Idea no existe" //TODO implementar throw error con ajv
  return idea
}

export default findIdeaNoAsig