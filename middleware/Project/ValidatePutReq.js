
import { Type } from "@sinclair/typebox"
import getDate from "../functions/date.js"
import Ajv from "ajv"
import addErrors from "ajv-errors"
import addFormats from "ajv-formats"
const ajv = new Ajv({ allErrors: true })
addFormats(ajv, ['date']).addKeyword('kind').addKeyword('modifier')
addErrors(ajv)

const ProjectEditSchema = Type.Object({
  Title: Type.Optional(Type.String({
    errorMessage: {
      Type: 'Title most be of type string'
    }
  })),
  Date: Type.Optional(Type.String({
    format: 'date',
    errorMessage: {
      Type: 'Date most be of type date'
    }
  }))
})

const valid = ajv.compile(ProjectEditSchema)
const validatePutReq = (req, res, next) => {
  const isDTOValid = valid(req.body)
  if (isDTOValid) next()

  res.status(400).send(ajv.errorsText(valid.errors, { separator: '\n' }))
}


export default validatePutReq