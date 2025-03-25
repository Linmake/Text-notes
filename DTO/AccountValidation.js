import {Ajv} from "ajv"
import addErrors from "ajv-errors"

const ajv = new Ajv( {allErrors: true })
addErrors(ajv)

const accountJsonSchema = {
  type: 'object',
  properties: {
    Id: { type: 'string', minLength: 5 },
    User: { type: 'string', minLength: 2 },
    Password: { type: 'string', minLength: 5 },
    Email: { type: 'email', minLength: 3},
  },
  required: ['Id', 'User', 'Password', 'Email'],
  additionalProperties: false
};

const validate = ajv.compile(accountJsonSchema);

const validateFile = (req, res, next) => {
  const project = req.body;
  const valid = validate(project);
  if (!valid) {
    const errorMessages = validate.errors.map(err => `${err.instancePath.slice(1)}: ${err.message}`).join(', ');
    return res.status(400).send(`Error validation: ${errorMessages}`);
  }
  next();
};

export default validateFile
