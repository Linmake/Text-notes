
import { proyectosDb } from "../../db/data-base.db.js"

/** //Doc
 * Retorna el proyecto donde se desea asignar la carpeta que no esta asiganada a ningún proyecto
 * @param {"Object"} carpeta Carpeta sin asignar que se ubicara en un proyecto 
 * @returns {"Object"} Proyecto donde se ubicara la carpeta
 */
export const findProyectNewUbi = (carpeta) => {
  const proyectTitle = carpeta.NombreProyectoAsig
  const proyect = proyectosDb.find( proyecto => proyecto.Title === proyectTitle )
  return proyect
}

/** //Doc
 * Retorna una carpeta con el Id indicado, dentro del proyecto proporcionado.
 * @param {"String"} idProyecto Id del Proyecto indicado
 * @returns {"Object"} Retorna el Proyecto encontrado  
 */
export const findProyect = (idProyecto) => {
  const proyecto = proyectosDb.find( proyecto => proyecto.Id == idProyecto )
  return proyecto
}
