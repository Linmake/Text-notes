
import getDate from "../functions/date.js"

/** //Doc
 * Remueve la carpeta del proyecto indicado
 * @param {"Object"} carpeta Carpeta que será removida
 * @param {"Object"} proyecto Proyecto del que se quitará la carpeta
 */
export const quitarProyecto = ( carpeta, proyecto ) => {
  const indexCarpeta = proyecto.CarpetasAdd.indexOf(carpeta)
  proyecto.CarpetasAdd.split(indexCarpeta, 1)
  carpeta.ProyectoAsignado = false
  carpeta.FechaMod = getDate.toString()
}

/** //Doc
 * Reubica la carpeta indicada al proyecto proporcionado
 * @param {"Object"} carpeta Carpeta que será asignada
 * @param {"Object"} proyecto Proyecto en que se ubicará la carpeta
 * @returns 
 */
export const asignarProyecto = (carpeta, proyecto) => { 
  const mensaje = `Carpeta con id: ${carpeta.Id} ubicada con exito`
  proyecto.CarpetasAdd.push(carpeta)
  const validAsig = carpeta.ProyectoAsignado 
  if( !validAsig ) quitarProyecto(carpeta, proyecto)
  carpeta.ProyectoAsignado = true
  carpeta.FechaMod = getDate.toString()
  return mensaje
}