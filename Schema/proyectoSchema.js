
import { Type } from "@sinclair/typebox";

const proyectSchema = Type.Object({
  Titulo: Type.String({
    errorMessage: {
      type: 'El Titulo del Proyecto debe ser un Strign '
    }
  }),
  Fecha: Type.String({
    errorMessage: {
      type: 'La Fecha del Proyecto debe ser un Strign'
    }
  }),
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
},{
  additionalProperties: false,
  errorMessage: 'El formato del Proyecto debe ser válido'
})

export default proyectSchema