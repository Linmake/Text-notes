
/** //Doc
 * Retorna un Booleano para saber si la propiedad elegida existe en el array
 * @param {"Array"} arr array con propiedades del objeto 
 * @param {"String"} propiety  Propiedad a evaluar si existe en el objeto
 * @returns {"Boolean"} Retorna true si existe y false si no
 */
const propExist = (arr, propiety) => {
  const valide = arr.some( prop => prop === propiety )
  return valide
}

export default propExist