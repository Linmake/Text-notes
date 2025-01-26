
import {Ajv} from "ajv"
import addErrors from "ajv-errors"

const ajv = new Ajv( {allErrors: true })
addErrors(ajv)

const fileJsonSchema = {
  type: 'object',
  properties: {
    Id: { type: 'string', minLength: 1 },
    Title: { type: 'string', minLength: 2 },
    Text: { type: 'string', minLength: 1 },
    IdFolder: { type: 'string' },
  },
  required: ['Id', 'Title', 'IdFolder'],
  additionalProperties: false
};

const validate = ajv.compile(fileJsonSchema);

const validateFile = (req, res, next) => {
  const proyect = req.body;
  const valid = validate(proyect);
  if (!valid) {
    const errorMessages = validate.errors.map(err => `${err.instancePath.slice(1)}: ${err.message}`).join(', ');
    return res.status(400).send(`Validation error: ${errorMessages}`);
  }
  next();
};

export default validateFile
