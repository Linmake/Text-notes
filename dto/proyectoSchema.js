
import { Type } from "@sinclair/typebox";

const proyectSchema = Type.Object({
  CollectionIdeas: Type.Object({
    errorMessage: {
      type: 'La colección de Ideas debe ser un objeto'
    }
  })
},{
  additionalProperties: false,
  errorMessage: 'El formato del objeto debe ser válido'
})