import express from "express";
import connectDB from "./db/data-base.db.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { createServer } from "http";
import cors from 'cors';
import FileRouter from "./routes/file.routes.js";
import FolderRouter from "./routes/folder.routes.js";
import ProyectRouter from "./routes/proyect.routes.js";

// Configuración de dotenv
dotenv.config();

const expressApp = express();
connectDB();

const server = createServer(expressApp);

// Middlewares
expressApp.use(cors());
expressApp.use(express.json());

expressApp.use(cors({
  origin: '*', // Permite solo solicitudes desde esta URL
  methods: ['GET', 'POST'], // Permite solo estos métodos HTTP
  allowedHeaders: ['Content-Type', 'Authorization'], // Permite solo estos encabezados
}));

// Rutas
expressApp.use("/file", FileRouter);
expressApp.use("/folder", FolderRouter);
expressApp.use("/proyect", ProyectRouter);

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`Servidor levantado en el puerto ${port}`);
});

export default expressApp;
