
import findFolder from "./findFolder.js"
import { findProyect } from "./findProyect.js"

/**
 * Retorna una file dentro del proyecto proporcionado y la carpeta.
 * @param {"Number"} idProyect Id del Proyecto indicado
 * @param {"Number"} idFolder Id de la carpeta indicada
 * @param {"Number"} idFile Id file a encontrar
 * @returns {"Object"} Retorna la file encontrada  
 */
const findFile = (idProyect, idFolder, idFile) => {
  const proyect = findProyect(idProyect)
  const folder = findFolder(proyect, idFolder)
  const {Files} = folder
  const file = Files.find( file => file.Id == idFile )
  if(!file) "File no existe" //TODO implemt with ajv

  return file
}

export default findFile