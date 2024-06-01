
import { carpetasDb } from '../db/data-base.db.js'
import validateCarpetaDTO from '../dto/validate-carpeta-dto.js'
import validatePutReq from '../middleware/carpeta/validate-put-req.js'
import express from 'express'
import getDate from '../middleware/functions/date.js'
import propExist from '../middleware/functions/propExist.js'
import { asignarProyecto, quitarProyecto } from '../middleware/carpeta/ubicacionCarpeta.js'
import findCarpeta from '../middleware/functions/findCarpeta.js'
import {findProyect, findProyectNewUbi } from '../middleware/functions/findProyect.js'
import findCarpetaNoAsig from '../middleware/functions/findCarpetaNoAsig.js'

const carpetaRouter = express.Router()

carpetaRouter.get('/', (req, res) => {
  res.status(200).send(carpetasDb)
})

carpetaRouter.get('/:idProyecto', (req, res) => {
  const proyecto = findProyect(req.params.idProyecto)
  res.status(200).send(proyecto.CarpetasAdd)
})

carpetaRouter.post('/create', validateCarpetaDTO, (req, res) => {
  const carpeta = req.body
  const propReq = Object.keys(carpeta)

  if (carpeta.ProyectoAsignado == false) quitarProyecto(carpeta)

  res.status(201).send(`Carpeta "${req.body.Titulo}" creada con exito`)
})

carpetaRouter.post('/create/:idProyecto/', validateCarpetaDTO, (req, res) => {
  const carpeta = req.body
  const { idProyecto } = req.body
  const propReq = Object.keys(carpeta)
  const isProyectoAsignado = propExist(propReq, "NombreProyectoAsig")
  if (isProyectoAsignado) asignarProyecto(carpeta)

  if (carpeta.ProyectoAsignado == false) quitarProyecto(carpeta)

  res.status(201).send(`Carpeta "${req.body.Titulo}" creada con exito`)
})

carpetaRouter.put('/edit/:idProyecto/:idCarpeta', validatePutReq, (req, res) => {
  const cont = req.body
  const { idProyecto, idCarpeta } = req.params
  const proyecto = findProyect(idProyecto)
  const carpeta = findCarpeta(proyecto, idCarpeta)
  const prop = Object.keys(cont)
  if (prop.length == 0) res.send('la petición está vácia')
  const valideReub = propExist(prop, "NombreProyectoAsig")
  if (valideReub) asignarProyecto()
  carpeta.Id = req.body.Id || carpeta.Id
  carpeta.Titulo = req.body.Titulo || carpeta.Titulo
  carpeta.FechaMod = getDate
  res.status(204).send('Editado con exito')
})

carpetaRouter.put('/edit/:idCarpeta', validatePutReq, (req, res) => {
  const cont = req.body
  const idCarpeta = req.params.idCarpeta
  const carpeta = findCarpetaNoAsig(idCarpeta)
  const prop = Object.keys(cont)
  if (prop.length == 0) res.send('la petición está vácia')
  const valideReub = propExist(prop, "NombreProyectoAsig")
  if (valideReub) {  
    const proyecto = findProyectNewUbi(carpeta)
    asignarProyecto(carpeta, proyecto) //TODO Implement carpeta es asignada a un proyecto
  }
  carpeta.Id = req.body.Id || carpeta.Id
  carpeta.Titulo = req.body.Titulo || carpeta.Titulo
  carpeta.FechaMod = getDate
  res.status(204).send('Editado con exito')
})

carpetaRouter.delete('/delete/:idCarpeta/', (req, res) => {
  const { idCarpeta } = req.params
  const carpeta = findCarpetaNoAsig(idCarpeta)
  const index = carpetasDb.indexOf(carpeta)
  carpetasDb.splice(index, 1)
  res.status(400).send("Carpetas eliminada con exito")
})

carpetaRouter.delete('/delete/:idProyecto/all', (req, res) => {
  const proyecto = findProyect(req.params.idProyecto)
  proyecto.CarpetasAdd = []
  res.status(400).send("Todas las carpetas eliminadas con exito")
})

carpetaRouter.delete('/delete/:idProyecto/:idCarpeta', (req, res) => {
  const proyecto = findProyect(req.params.idProyecto)
  const {CarpetasAdd} = proyecto
  const carpeta = findCarpeta(proyecto, req.params.idCarpeta)
  const index = (CarpetasAdd.indexOf(carpeta))
  CarpetasAdd.splice(index, 1)
  res.status(400).send(`Carpeta con Id: ${carpeta.Id} eliminada con exito`)
})

export default carpetaRouter


import { carpetasDb } from '../db/data-base.db.js'
import validateCarpetaDTO from '../dto/validate-carpeta-dto.js'
import validatePutReq from '../middleware/carpeta/validate-put-req.js'
import express from 'express'
import getDate from '../middleware/functions/date.js'
import propExist from '../middleware/functions/propExist.js'
import { asignarProyecto, quitarProyecto } from '../middleware/carpeta/ubicacionCarpeta.js'
import findCarpeta from '../middleware/functions/findCarpeta.js'
import {findProyect, findProyectNewUbi } from '../middleware/functions/findProyect.js'
import findCarpetaNoAsig from '../middleware/functions/findCarpetaNoAsig.js'

const carpetaRouter = express.Router()

carpetaRouter.get('/', (req, res) => {
  res.status(200).send(carpetasDb)
})

carpetaRouter.get('/:idProyecto', (req, res) => {
  const proyecto = findProyect(req.params.idProyecto)
  res.status(200).send(proyecto.CarpetasAdd)
})

carpetaRouter.post('/create', validateCarpetaDTO, (req, res) => {
  const carpeta = req.body
  const propReq = Object.keys(carpeta)

  if (carpeta.ProyectoAsignado == false) quitarProyecto(carpeta)

  res.status(201).send(`Carpeta "${req.body.Titulo}" creada con exito`)
})

carpetaRouter.post('/create/:idProyecto/', validateCarpetaDTO, (req, res) => {
  const carpeta = req.body
  const { idProyecto } = req.body
  const propReq = Object.keys(carpeta)
  const isProyectoAsignado = propExist(propReq, "NombreProyectoAsig")
  if (isProyectoAsignado) asignarProyecto(carpeta)

  if (carpeta.ProyectoAsignado == false) quitarProyecto(carpeta)

  res.status(201).send(`Carpeta "${req.body.Titulo}" creada con exito`)
})

carpetaRouter.put('/edit/:idProyecto/:idCarpeta', validatePutReq, (req, res) => {
  const cont = req.body
  const { idProyecto, idCarpeta } = req.params
  const proyecto = findProyect(idProyecto)
  const carpeta = findCarpeta(proyecto, idCarpeta)
  const prop = Object.keys(cont)
  if (prop.length == 0) res.send('la petición está vácia')
  const valideReub = propExist(prop, "NombreProyectoAsig")
  if (valideReub) asignarProyecto()
  carpeta.Id = req.body.Id || carpeta.Id
  carpeta.Titulo = req.body.Titulo || carpeta.Titulo
  carpeta.FechaMod = getDate
  res.status(204).send('Editado con exito')
})

carpetaRouter.put('/edit/:idCarpeta', validatePutReq, (req, res) => {
  const cont = req.body
  const idCarpeta = req.params.idCarpeta
  const carpeta = findCarpetaNoAsig(idCarpeta)
  const prop = Object.keys(cont)
  if (prop.length == 0) res.send('la petición está vácia')
  const valideReub = propExist(prop, "NombreProyectoAsig")
  if (valideReub) {  
    const proyecto = findProyectNewUbi(carpeta)
    asignarProyecto(carpeta, proyecto) //TODO Implement carpeta es asignada a un proyecto
  }
  carpeta.Id = req.body.Id || carpeta.Id
  carpeta.Titulo = req.body.Titulo || carpeta.Titulo
  carpeta.FechaMod = getDate
  res.status(204).send('Editado con exito')
})

carpetaRouter.delete('/delete/:idCarpeta/', (req, res) => {
  const { idCarpeta } = req.params
  const carpeta = findCarpetaNoAsig(idCarpeta)
  const index = carpetasDb.indexOf(carpeta)
  carpetasDb.splice(index, 1)
  res.status(400).send("Carpetas eliminada con exito")
})

carpetaRouter.delete('/delete/:idProyecto/all', (req, res) => {
  const proyecto = findProyect(req.params.idProyecto)
  proyecto.CarpetasAdd = []
  res.status(400).send("Todas las carpetas eliminadas con exito")
})

carpetaRouter.delete('/delete/:idProyecto/:idCarpeta', (req, res) => {
  const proyecto = findProyect(req.params.idProyecto)
  const {CarpetasAdd} = proyecto
  const carpeta = findCarpeta(proyecto, req.params.idCarpeta)
  const index = (CarpetasAdd.indexOf(carpeta))
  CarpetasAdd.splice(index, 1)
  res.status(400).send(`Carpeta con Id: ${carpeta.Id} eliminada con exito`)
})

export default carpetaRouter