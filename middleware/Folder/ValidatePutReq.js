
import { Type } from "@sinclair/typebox"
import Ajv from "ajv"
import addErrors from "ajv-errors"
import addFormats from "ajv-formats"
const ajv = new Ajv({ allErrors: true })
addFormats(ajv, ['date']).addKeyword('kind').addKeyword('modifier')
addErrors(ajv)

const FolderEditSchema = Type.Object({
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
  })),
  Void: Type.Optional(Type.Boolean({
    errorMessage: {
      type: 'Void most be of type boolean'
    }
  })),
  Files: Type.Optional(Type.Array({
    errorMessage: {
      type: 'Files most be of type array'
    }
  })),
  ProjectId: Type.Optional(Type.String({
    errorMessage: {
      type: 'ProjectId most be of type string'
    }
  })),
})

const valid = ajv.compile(FolderEditSchema)
const validatePutReq = (req, res, next) => {
  const isDTOValid = valid(req.body)
  if (isDTOValid) next()

  res.status(400).send(ajv.errorsText(valid.errors, { separator: '\n' }))
}

export default validatePutReq