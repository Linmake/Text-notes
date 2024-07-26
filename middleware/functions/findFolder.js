
/**
 * Retorna una folder con el Id indicado, dentro del proyect proporcionado.
 * @param {"Object"} proyect Proyect indicado
 * @param {"Number"} idfolder Id de la folder a encontrar
 * @returns {"Object"} Retorna la folder encontrada  
 */
const findFolder = (proyect, idFolder) => {
  const folder = proyect.Folders.find( folder => folder.Id == idFolder )
  return folder
}

export default findFolder