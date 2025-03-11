

Español - Spanish 
## Implementaciones futuras:
-Typescript

#### LISTA DE TODAS LAS RUTAS {SOLO DE LA API} :
puerto back: 4000       npm run dev
puerto front:4001       npm start

### PROYECTO: --------!


/*** Crear proyecto
 Props: { Id, Titulo } 
*/

#  proyect/create

/*** Ver proyectos
 Props 0 
*/

#  proyect/

/*** Editar proyecto
 Props: Opt{ Id, Titulo } 
*/

#  proyect/edit/:idProyecto

/*** Eliminar proyecto
 Props: { Id } 
*/

#  proyect/delete/:idProyecto


###  CARPETA:

Crear carpeta
 Props: {Id,Titulo} 
*/

# folder/create


/*** Crear carpeta
 Props: {Id,Titulo} 
*/

# folder/edit/:idProyect/:idFolder

/*** Crear carpeta
 Props: {Id,Titulo} 
*/

# folder/edit/:idFolder

/*** Crear carpeta
 Props: {Id,Titulo} 
*/

# folder/

/*** Crear carpeta
 Props: {Id,Titulo} 
*/

# folder/:idProyect

/*** Crear carpeta
 Props: {Id,Titulo} 
*/

# folder/delete/:idFolder/

/*** Crear carpeta
 Props: {Id,Titulo} 
*/

# folder/delete/:idProyect/all

/*** Crear carpeta
 Props: {Id,Titulo} 
*/

# folder/delete/:idProyect/:idFolder

### IDEA: --------! 

/*** Crear idea
 Props: {Id, Titulo, Texto}, 
 opt{ idCarpeta, idProyecto }
*/

#  file/create/

/*** Crear idea en proyecto
 Props: {Id, Titulo, Texto}
 params: { idProyecto } 
*/

#  file/create/:idProyect

/*** Crear idea en carpeta dentro de proyecto
 Props: {Id, Titulo, Texto},
 params: { idProyecto, idCarpeta, idIdea }
*/

#  file/create/:idProyect/idFolder 

/*** Ver idea sin asignación
 params: {idIdea} 
*/

#  file/:idFile

/*** Crear idea
 Props: {Id,Titulo} 
*/

#  file/:idProyect/: idFile 

/*** Crear idea
 Props: {Id,Titulo} 
*/

#  file/:idProyect/:idFolder/:idFile 

/*** Obtener idea de un folder dentro de un proyect
 Props: {Id,Titulo} 
*/

#  file/:idFile

/*** Crear idea
 Props: {Id,Titulo} 
*/

#  file/edit/:idProyect/:idFolder/:idFile

/*** Editar idea de un folder dentro de un proyect
 Props: {Id,Titulo} 
*/

#  file/edit/:idProyect/:idFile


/** Crear idea dentro de un proyect
*Props: {Id,Titulo} 
*/

#  file/delete/:idFile

<br>
/*** Crear idea
 Props: {Id,Titulo} 
*/

#  file/delete/:idProyect/:idFolder/:idFile

<br>
/*** Crear idea
 Props: {Id,Titulo} 
*/

#  file/delete/:idProyect/:idFile