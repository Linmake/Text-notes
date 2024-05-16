
/**
 * Retorna una carpeta con el Id indicado, dentro del proyecto proporcionado.
 * @param {"Object"} proyecto Proyecto indicado
 * @param {"Number"} idCarpeta Id de la carpeta a encontrar
 * @returns {"Object"} Retorna la carpeta encontrada  
 */
const findCarpeta = (proyecto, idCarpeta) => {
  const carpeta = proyecto.CarpetasAdd.find( carpeta => carpeta.Id == idCarpeta )
  return carpeta
}

export default findCarpeta