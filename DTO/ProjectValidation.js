
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
addErrors(ajv);

const projectJsonSchema = {
  type: 'object',
  properties: {
    Id: { type: 'string', minLength: 1 },
    Title: { type: 'string', minLength: 1 },
    Date: { type: ['string', 'null'], pattern: '\\d{4}-\\d{2}-\\d{2}' },
    Folders: { type: 'array' }
  },
  required: ['Id', 'Title', 'Date' ],
  additionalProperties: false
};

const validate = ajv.compile(projectJsonSchema);

const validateProject = (req, res, next) => {
  const project = req.body;
  const valid = validate(project);
  if (!valid) {
    const errorMessages = validate.errors.map(err => `${err.instancePath.slice(1)}: ${err.message}`).join(', ');
    return res.status(400).send(`Error validation: ${errorMessages}`);
  }
  next();
};

export default validateProject;
