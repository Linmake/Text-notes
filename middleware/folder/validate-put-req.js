
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
  Titulo: Type.Optional(Type.String({
    errorMessage: {
      Type: 'Titulo es de tipo String'
    }
  })),
  FechaMod: Type.Optional(Type.String({
    format: 'date',
    errorMessage: {
      Type: 'Fecha es de tipo String'
    }
  })),
  Vacio: Type.Optional(Type.Boolean({
    errorMessage: {
      type: 'Es de tipo booleano.'
    }
  })),
  CarpetasDentro: Type.Optional(Type.Array({
    errorMessage: {
      type: 'La lista de Carpetas es de tipo Array.'
    }
  })),
  ArchivosDentro: Type.Optional(Type.Array({
    errorMessage: {
      type: 'La lista de Aechivos es de tipo Array.'
    }
  })),
  CantidadArchivos: Type.Optional(Type.Number({
    errorMessage: {
      type: 'La Cantidad de Archivos es de tipo Número.'
    }
  })),
  ProyectoAsignado: Type.Optional(Type.Boolean({
    errorMessage: {
      type: 'El tipo de asignacion es Booleano'
    }
  })),
  NombreProyectoAsig: Type.Optional(Type.String({
    errorMessage: {
      type: 'El Titulo del Proyecto al que pertenece es de tipo String'
    }
  })),
})

const valid = ajv.compile(ideaEditSchema)
const validatePutReq = (req, res, next) => {
  const isDTOValid = valid(req.body)
  if (isDTOValid) next()

  res.status(400).send(ajv.errorsText(valid.errors, { separator: '\n' }))
}

export default validatePutReq