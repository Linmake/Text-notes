
import { Type } from "@sinclair/typebox"
import getDate from "../functions/date.js"
import Ajv from "ajv"
import addErrors from "ajv-errors"
import addFormats from "ajv-formats"
const ajv = new Ajv({ allErrors: true })
addFormats(ajv, ['date']).addKeyword('kind').addKeyword('modifier')
addErrors(ajv)

const proyectEditSchema = Type.Object({
  Id: Type.Optional(Type.Number({
    errorMessage: {
      Type: 'ID debe ser un número'
    }
  })),
  Titulo: Type.Optional(Type.String({
    errorMessage: {
      Type: 'Titulo es de tipo String'
    }
  })),
  Fecha: Type.Optional(Type.String({
    format: 'date',
    errorMessage: {
      Type: 'Fecha es de tipo String'
    }
  }))
})

const valid = ajv.compile(proyectEditSchema)

const validatePutReq = (req, res, next) => {
  req.body.CarpetasAdd = []
  req.body.IdeasAdd = []
  req.body.Fecha = (getDate).toString()
  const contenido = req.body
  const propiedades = Object.keys(contenido)
  if(propiedades.length === 0) res.send('Petición vácia')
  

  const isDTOValid = valid(req.body)
  if (isDTOValid) next()

  res.status(400).send(ajv.errorsText(valid.errors, { separator: '\n' }))
}


export default validatePutReq