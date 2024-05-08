import { Type } from "@sinclair/typebox"
import Ajv from "ajv"
import addErrors from "ajv-errors"

const ajv = new Ajv( {allErrors: true })
addErrors(ajv)


const ideaEditSchema = Type.Object({
  Id: Type.Optional(Type.Number({
    errorMessage: {
      Type: 'Id es de tipo numero'
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
    errorMessage: {
      Type: 'Fecha es de tipo String'
    }
  }))
})

const valid = ajv.compile(ideaEditSchema)

const validatePutReq = ( req, res, next ) => {
  if(req.body == {}) {
    res.status(400)
  }

  const isDTOValid = valid(req.body)
  if (!isDTOValid) res.status(400).send(ajv.errorsText( valid.errors, {separator: '\n'} ))

  next()
}

export default validatePutReq