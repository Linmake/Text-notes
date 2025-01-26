
import { filesDb } from "../../db/data-base.db.js"

/**
 * Retorna el archivo sin asignación del Id proporcionado
 * @param {"String"} idFile Id del archivo
 * @returns {"Object"} archivo sin ser asignado a un proyecto
 */
const findFileNoAsig = ( idFile ) => {
  const file = filesDb.find(file => file.Id == idFile)
  if(!file) "file no existe" //TODO implementar throw error con ajv
  return file
}

export default findFileNoAsig