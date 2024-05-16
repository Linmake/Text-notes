
import { Ajv } from "ajv"
import addFormats from "ajv-formats"
import addErrors from "ajv-errors"
import carpetaSchema from "../Schema/carpetaSchema.js"
import getDate from "../middleware/functions/date.js"
import { carpetasDb } from "../db/data-base.db.js"

const ajv = new Ajv({ allErrors: true })
addFormats(ajv, ['date']).addKeyword('kind').addKeyword('modifier')
addErrors(ajv)

const valid = ajv.compile(carpetaSchema)

const validateCarpetaDTO = ((req, res, next) => {
  const carpeta = req.body
  
  carpeta.ArchivosDentro = []
  carpeta.CarpetasDentro = []
  carpeta.Fecha = (getDate).toString()
  carpeta.FechaMod = carpeta.Fecha
  carpeta.Vacio = true
  carpeta.CantidadArchivos = 0

  if (carpeta.ProyectoAsignado == false) {
    carpeta.NombreProyectoAsig = 'Sin Proyecto asignado'
    carpetasDb.push(carpeta)
  }

  const isDTOValid = valid(carpeta)
  if (!isDTOValid) res.status(400).send(ajv.errorsText(valid.errors, { separator: '\n' }))

  next()
})

export default validateCarpetaDTO