
import { proyectsDb } from "../../db/data-base.db.js"

/** //Doc
 * Retorna el proyect donde se desea asignar la carpeta que no esta asiganada a ningún proyect
 * @param {"Object"} carpeta Carpeta sin asignar que se ubicara en un proyect 
 * @returns {"Object"} Proyect donde se ubicara la carpeta
 */
export const findProyectNewUbi = (carpeta) => {
  const proyectTitle = carpeta.NombreProyectAsig
  const proyect = proyectsDb.find( proyect => proyect.Title === proyectTitle )
  return proyect
}

/** //Doc
 * Retorna una carpeta con el Id indicado, dentro del proyecto proporcionado.
 * @param {"String"} idProyecto Id del Proyecto indicado
 * @returns {"Object"} Retorna el Proyecto encontrado  
 */
export const findProyect = (idProyect) => {
  const proyect = proyectsDb.find( proyect => proyect.Id == idProyect )
  return proyect
}
