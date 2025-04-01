import Ajv from "ajv";
import addErrors from "ajv-errors"

const ajv = new Ajv( {allErrors: true })
addErrors(ajv)

const accountJsonSchema = {
  type: 'object',
  properties: {
    Id: { type: 'string', minLength: 5 },
    Name: { type: 'string', minLength: 2 },
    Password: { type: 'string', minLength: 4 },
    Email: { type: 'string', minLength: 3},
    Role: { type: 'string', minLength: 4},
  },  
  required: ['Id', 'Name', 'Password', 'Email', 'Role'],
  additionalProperties: false
};

const validate = ajv.compile(accountJsonSchema);

const validateAccount = (req, res, next) => {
  const account = req.body;
  const valid = validate(account);
  if (!valid) {
    const errorMessages = validate.errors.map(err => `${err.instancePath.slice(1)}: ${err.message}`).join(', ');
    return res.status(400).send(`Error validation: ${errorMessages}`);
  }
  next();
};

export default validateAccount
