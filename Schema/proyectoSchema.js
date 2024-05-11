
import { Type } from "@sinclair/typebox";

const proyectSchema = Type.Object({
  Id: Type.Number({
    errorMessage: {
      type: 'Id debe ser un número'
    }
  }),
  Titulo: Type.String({
    errorMessage: {
      type: 'El Titulo del Proyecto debe ser un Strign'
    }
  }),
  Fecha: Type.Optional(Type.String({
    format: 'date',
    errorMessage: {
      format: 'El Formato es Fecha',
      type: 'La Fecha del Proyecto debe ser un Strign'
    }
  })),
  CarpetasAdd: Type.Array({
    errorMessage: {
      type: 'La lista de Carpetas dentro del Proyecto debe ser un Array'
    }
  }),
  IdeasAdd: Type.Array({
    errorMessage: {
      type: 'La lista de Ideas dentro del Proyecto debe ser un Array'
    }
  }),
}, {
  additionalProperties: false,
  errorMessage: 'El formato del Proyecto debe ser válido'
})
 
export default proyectSchema