
import { carpetasDb } from "../../db/data-base.db.js"

/**
 * Retorna la carpeta sin proyecto con el Id proporcionado 
 * @param {"String"} idCarpeta Id de la carpeta 
 * @returns {"Object"} Carpeta sin proyecto
 */
const findCarpetaNoAsig = ( idCarpeta ) => {
  const carpeta = carpetasDb.find(carpeta => carpeta.Id == idCarpeta)
  if(!carpeta) "Carpeta no existe" //TODO implementar throw error con ajv
  return carpeta
}

export default findCarpetaNoAsig