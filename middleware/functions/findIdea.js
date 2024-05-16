
import findCarpeta from "./findCarpeta.js"
import { findProyect } from "./findProyect.js"

/**
 * Retorna una Idea dentro del proyecto proporcionado y la carpeta.
 * @param {"Number"} idProyecto Id del Proyecto indicado
 * @param {"Number"} idCarpeta Id de la carpeta indicada
 * @param {"Number"} idIdea Id Idea a encontrar
 * @returns {"Object"} Retorna la Idea encontrada  
 */
const findIdea = (idProyecto, idCarpeta, idIdea) => {
  const proyecto = findProyect(idProyecto)
  const carpeta = findCarpeta(proyecto, idCarpeta)
  const {ArchivosDentro} = carpeta
  const idea = ArchivosDentro.find( idea => idea.Id == idIdea )
  if(!idea) "Idea no existe" //TODO implemt with ajv

  return idea
}

export default findIdea