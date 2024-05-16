
import { Type } from "@sinclair/typebox"

const ideaSchema = new Type.Object({

  Id: Type.Number({
    errorMessage: {
      type: 'Id debe ser un número'
    }
  }),

  IdCarpeta: Type.Optional(Type.Number({
    errorMessage: {
      type: 'Id debe ser un número'
    }
  })),

  IdProyecto: Type.Optional(Type.Number({
    errorMessage: {
      type: 'Id debe ser un número'
    }
  })),

  Titulo: Type.String({
    errorMessage: {
      type: 'El Titulo debe ser de tipo String'
    }
  }),
  Fecha: Type.Optional(Type.String({
    format: 'date',
    errorMessage: {
      type: 'La fecha debe ser un string',
      format: 'Fecha es el tipo de formato'
    }
  })),
  FechaModif: Type.Optional(Type.String({
    format: 'date',
    errorMessage: {
      type: 'La fecha debe ser un string',
      format: 'Fecha es el tipo de formato'
    }
  })),
  Texto: Type.String({
    errorMessage: {
      type: 'El texto debe ser de tipo String'
    }
  }),
},
  {
    additionalProperties: false,
    errorMessage: 'El formato del objeto debe ser válido'
  })

export default ideaSchema
