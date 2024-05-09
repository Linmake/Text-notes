import { Type } from "@sinclair/typebox";

const carpetaSchema = Type.Object({
  Titulo: Type.String({}),
  Fecha: Type.String({}),
  FechaMod: Type.String({}),
  Vacio: Type.Boolean({}),
  CarpetasDentro: Type.Array({}),
  ArchivosDentro: Type.Array({}),
  ProyectoPert: Type.String({}),
  CantidadArchivos: Type.Number({})
})

export default carpetaSchema