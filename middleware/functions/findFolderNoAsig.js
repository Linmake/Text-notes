
import { foldersDb } from "../../db/data-base.db.js"

/**
 * folder sin proyecto con el Id proporcionado 
 * @param {"String"} idCarpeta Id de la carpeta 
 * @returns {"Object"} folder sin proyecto
 */
const findfolderNoAsig = ( idfolder ) => {
  const folder = foldersDb.find(folder => folder.Id == idfolder)
  if(!folder) "folder no existe" //TODO implementar throw error con ajv
  return folder
}

export default findfolderNoAsig