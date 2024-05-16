
import { Type } from "@sinclair/typebox"
import Ajv from "ajv"
import addErrors from "ajv-errors"
import addFormats from "ajv-formats"

const ajv = new Ajv({ allErrors: true })
addFormats(ajv, ['date']).addKeyword('kind').addKeyword('modifier')
addErrors(ajv)

const ideaEditSchema = Type.Object({
  Id: Type.Optional(Type.Number({
    errorMessage: {
      Type: 'ID debe ser un número'
    }
  })),
  IdCarpeta: Type.Optional(Type.Number({
    errorMessage: {
      Type: 'ID debe ser un número'
    }
  })),
  IdProyecto: Type.Optional(Type.Number({
    errorMessage: {
      Type: 'ID debe ser un número'
    }
  })),
  Titulo: Type.Optional(Type.String({
    errorMessage: {
      Type: 'Titulo es de tipo String'
    }
  })),
  Texto: Type.Optional(Type.String({
    errorMessage: {
      Type: 'Texto es de tipo String'
    }
  })),
  Fecha: Type.Optional(Type.String({
    format: 'date',
    errorMessage: {
      Type: 'Fecha es de tipo String'
    }
  }))
})

const valid = ajv.compile(ideaEditSchema)
const validatePutReq = (req, res, next) => {
  const isDTOValid = valid(req.body)
  if (isDTOValid) next()
  res.status(400).send(ajv.errorsText(valid.errors, { separator: '\n' }))
}

export default validatePutReq