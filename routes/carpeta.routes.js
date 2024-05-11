
import { carpetasDb, proyectosDb } from '../db/data-base.db.js'
import validateCarpetaDTO from '../dto/validate-carpeta-dto.js'
import express from 'express'

const carpetaRouter = express.Router()

carpetaRouter.get( '/', (req, res) => {
  res.status(200).send( carpetasDb )
})

carpetaRouter.post('/create', validateCarpetaDTO, (req, res) => {
  const carpeta = req.body
  const proyectoPert = carpeta.NombreProyectoAsig
  const proyecto = proyectosDb.find( proyecto => proyecto.Titulo === proyectoPert )
  if( !proyectoPert & (proyecto == undefined) ) res.status(400).send('Coloca true en el proyecto asignado')
  proyecto.CarpetasAdd.push(carpeta)
  
  res.status(201).send(`Carpeta "${req.body.Titulo}" creada con exito`)
})


export default carpetaRouter