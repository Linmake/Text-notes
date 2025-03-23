import { Type } from "@sinclair/typebox"
import Ajv from "ajv"
import addErrors from "ajv-errors"
import addFormats from "ajv-formats"

const ajv = new Ajv({ allErrors: true })
addFormats(ajv, ['date']).addKeyword('kind').addKeyword('modifier')
addErrors(ajv)

const FileEditSchema = Type.Object({
  Title: Type.Optional(Type.String({
    errorMessage: {
      Type: 'Title most be of type string'
    }
  })),
  Text: Type.Optional(Type.String({
    errorMessage: {
      Type: 'Text most be of type string'
    }
  })),
  FolderId: Type.Optional(Type.Number({
    errorMessage: {
      Type: 'Id most be of type number'
    }
  })),
})

const valid = ajv.compile(FileEditSchema)
const validatePutReq = (req, res, next) => {
  const isDTOValid = valid(req.body)
  if (isDTOValid) next()
  res.status(400).send(ajv.errorsText(valid.errors, { separator: '\n' }))
}

export default validatePutReq