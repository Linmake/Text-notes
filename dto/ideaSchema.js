
import { Type } from "@sinclair/typebox"

const ideaSchema = new Type.Object({
  Titulo: Type.String({
    errorMessage: {
      type: 'El Titulo debe ser de tipo String'
    }
  }),
  Fecha: Type.Date({
    format: 'Date',
    errorMessage: {
      type: 'La fecha debe ser un string',
      format: 'Fecha es el tipo de formato'
    }
  }),
  Texto: Type.String({
    errorMessage: {
      type: 'El texto debe ser de tipo String'
    }
  }),
  required: [Titulo, Fecha, Texto],
},
  {
    additionalProperties: false,
    errorMessage: 'El formato del objeto debe ser válido'
  })

export default ideaSchema