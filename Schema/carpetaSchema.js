import { Type } from "@sinclair/typebox";

const carpetaSchema = Type.Object({
  Titulo: Type.String({
    errorMessage: {
      type: 'El Titulo debe ser de tipo String.'
    }
  }),
  Fecha: Type.String({
    errorMessage: {
      format: 'El Formato es Fecha',
      type: 'La Fecha debe ser de tipo String.',
    }
  }),
  FechaMod: Type.String({
    errorMessage: {
      type: 'La Fecha debe ser de tipo String.'
    }
  }),
  Vacio: Type.Boolean({
    errorMessage: {
      type: 'Es de tipo booleano.'
    }
  }),
  CarpetasDentro: Type.Array({
    errorMessage: {
      type: 'La lista de Carpetas es de tipo Array.'
    }   
  }),
  ArchivosDentro: Type.Array({
    errorMessage: {
      type: 'La lista de Archivos es de tipo Array.'
    }
  }),
  ProyectoAsignado: Type.String({
    errorMessage: {
      type: 'El Titulo del Proyecto al que pertenece es de tipo String.'
    }
  }),
  CantidadArchivos: Type.Number({
    errorMessage: {
      type: 'La Cantidad de Archivos es de tipo Número.'
    }
  })
})

export default carpetaSchema