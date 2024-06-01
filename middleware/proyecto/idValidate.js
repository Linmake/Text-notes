
import { proyectosDb } from "../../db/data-base.db.js"

const idValidate = (proyecto) => {
  const id = proyecto.Id
  const idExist = proyectosDb.some(proyecto => proyecto.Id == id )
  let valide = false
  if(!idExist) valide = true

  return valide
}

export default idValidate