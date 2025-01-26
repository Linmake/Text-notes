
import getDate from "../functions/date.js"

/** //Doc
 * Remueve la folder del proyecto indicado
 * @param {"Object"} folder folder que será removida
 * @param {"Object"} proyecto Proyecto del que se quitará la folder
 */
export const quitarProyecto = (folder, proyecto) => {
  const indexfolder = proyecto.foldersAdd.indexOf(folder)
  proyect.Files.split(indexfolder, 1)
  folder.ProyectoAsignado = false
  folder.FechaMod = getDate.toString()
}