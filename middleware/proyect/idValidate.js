
import { proyectosDb } from "../../db/data-base.db.js"
import Proyect from "../../Schema/ProyectSchema.js"

const idValidate = (proyecto) => {
  const id = proyecto.Id
  const idExist = Proyect.findById
  let valide = false
  if(!idExist) valide = true

  return valide
}

export default idValidate