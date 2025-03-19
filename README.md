

#### LISTA DE TODAS LAS RUTAS:
puerto back: 4000       npm run dev
puerto front:4001       npm start

### PROYECT:

#  proyect/create
Create
Props: { Id, Titulo } 

#  proyect/

 Props: Opt{ Id, Titulo } 

#  proyect/edit/:idProyecto
 Edit 
  Props: Opt{ Id, Titulo } 

Eliminar proyecto
 Props: { Id } 

#  proyect/delete/:idProyecto


###  CARPETA:

Crear carpeta
 Props: {Id,Titulo} 

# folder/create

Crear carpeta
 Props: {Id,Titulo} 

# folder/edit/:idProyect/:idFolder
Crear carpeta
 Props: {Id,Titulo} 

# folder/edit/:idFolder
Crear carpeta
 Props: {Id,Titulo} 

# folder/
Crear carpeta
 Props: {Id,Titulo} 

# folder/:idProyect
Crear carpeta
 Props: {Id,Titulo} 

# folder/delete/:idFolder/
Crear carpeta
 Props: {Id,Titulo} 

# folder/delete/:idProyect/all
Crear carpeta
 Props: {Id,Titulo} 

# folder/delete/:idProyect/:idFolder

### FILE:
Crear file
 Props: {Id, Titulo, Texto}, 
 opt{ idCarpeta, idProyecto }

#  file/create/
Crear file en proyect
 Props: {Id, Titulo, Texto}
 params: { idProyecto } 

#  file/create/:idProyect
Crear file en folder dentro de proyect
 Props: {Id, Titulo, Texto},
 params: { idProyecto, idCarpeta, idIdea }

#  file/create/:idProyect/idFolder 
crear file sin asignación
 params: {idIdea} 

#  file/:idFile
Crear file
 Props: {Id,Titulo} 

#  file/:idProyect/: idFile 
Crear file
 Props: {Id,Titulo} 

#  file/:idProyect/:idFolder/:idFile 
Obtener file de un folder dentro de un proyect
 Props: {Id,Titulo} 

#  file/:idFile
Crear file
 Props: {Id,Titulo} 

#  file/edit/:idProyect/:idFolder/:idFile
Editar file de un folder dentro de un proyect
 Props: {Id,Titulo} 

#  file/edit/:idProyect/:idFile

Crear file dentro de un proyect
Props: {Id,Titulo} 

#  file/delete/:idFile
Eliminar File
 Props: {Id,Titulo} 

#  file/delete/:idProyect/:idFolder/:idFile
delete file
 Props: {Id,Titulo} 

#  file/delete/:idProyect/:idFile
