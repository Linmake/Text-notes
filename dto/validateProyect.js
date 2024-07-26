
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
addErrors(ajv);

const proyectJsonSchema = {
  type: 'object',
  properties: {
    Id: { type: 'string' },
    Title: { type: 'string', minLength: 1 },
    Date: { type: ['string', 'null'], pattern: '\\d{4}-\\d{2}-\\d{2}' },
    Folders: { type: 'array' }
  },
  required: ['Id', 'Title'],
  additionalProperties: false
};

const validate = ajv.compile(proyectJsonSchema);

const validateProyect = (req, res, next) => {
  const proyect = req.body;
  const valid = validate(proyect);
  if (!valid) {
    const errorMessages = validate.errors.map(err => `${err.instancePath.slice(1)}: ${err.message}`).join(', ');
    return res.status(400).send(`Validation error: ${errorMessages}`);
  }
  next();
};

export default validateProyect;
