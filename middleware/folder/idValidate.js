
import { foldersDb } from "../../db/data-base.db.js"

const idValidate = (folder) => {
  const id = folder.Id
  const idExist = foldersDb.some(folder => folder.Id == id )
  let valide = false
  if(!idExist) valide = true

  return valide
}

export default idValidate