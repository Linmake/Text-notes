
import {Ajv} from "ajv"
import addFormats from "ajv-formats"
import addErrors from "ajv-errors"
import ideaSchema from "../Schema/ideaSchema.js"
const ajv = new Ajv( {allErrors: true })
addFormats(ajv, ['date']).addKeyword('kind').addKeyword('modifier')
addErrors(ajv)

const valid = ajv.compile(ideaSchema)
const validateIdeaDTO =(( req, res, next ) => {
  const isDTOValid = valid(req.body)
  if (!isDTOValid) res.status(400).send(ajv.errorsText( valid.errors, {separator: '\n'} ))
  next()
})

export default validateIdeaDTO
