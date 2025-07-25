// folderValidation.js
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
addErrors(ajv);

const FolderJsonSchema = {
  type: 'object',
  properties: {
    Id: { type: 'string', minLength: 1 },
    Title: { type: 'string', minLength: 1 },
    Date: { type: 'string', pattern: '\\d{4}-\\d{2}-\\d{2}' },
    Void: { type: 'boolean' },
    Files: { type: 'array' },
    ProjectId: { type: 'string', minLength: 1 },
    UserId: {type: 'string'}
  },
  required: ['Id', 'Title', 'ProjectId'],
  additionalProperties: false
};

const validate = ajv.compile(FolderJsonSchema);

const validateFolder = (req, res, next) => {
  const folder = req.body
  const valid = validate(folder);
  if (!valid) {
    const errorMessages = validate.errors.map(err => `${err.instancePath.slice(1)}: ${err.message}`).join(', ');
    return res.status(400).send(`Error validation: ${errorMessages}`);
  }
  next()
};

export default validateFolder;