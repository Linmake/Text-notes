
import Express from 'express'
const expressApp = Express()
import ideaRouter from './routes/idea.routes.js'
import dotenv from 'dotenv'

expressApp.use(Express.json())
expressApp.use('/idea', ideaRouter)


dotenv.config()

const port = process.env.PORT || 3000

expressApp.listen(port, () => {
  console.log(`Servidor levantado en el puerto ${port}`)
})

export default expressApp