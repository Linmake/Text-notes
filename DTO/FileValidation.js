
import {Ajv} from "ajv"
import addErrors from "ajv-errors"

const ajv = new Ajv( {allErrors: true })
addErrors(ajv)

const fileJsonSchema = {
  type: 'object',
  properties: {
    Id: { type: 'string', minLength: 5 },
    Title: { type: 'string', minLength: 1 },
    Text: { type: 'string', nullable: true },
    FolderId: { type: 'string' },
    UserId: { type: 'string', minLength: 5 },
  },
  required: ['Id', 'Title', 'FolderId', 'UserId'],
  additionalProperties: false
};

const validate = ajv.compile(fileJsonSchema);

const FileValidation = (req, res, next) => {
  const project = req.body;
  const valid = validate(project);
  if (!valid) {
    const errorMessages = validate.errors.map(err => `${err.instancePath.slice(1)}: ${err.message}`).join(', ');
    return res.status(400).send(`Error validation: ${errorMessages}`);
  }
  next();
};

export default FileValidation
