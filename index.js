import express from "express";
import connectDB from "./DB/data-base.db.js";
import dotenv from "dotenv";
import { createServer } from "http";
import cors from 'cors';
import FileRouter from "./Routes/file.routes.js";
import FolderRouter from "./Routes/folder.routes.js";
import ProjectRouter from "./Routes/project.routes.js";
import AccountRouter from "./Routes/account.routes.js";

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
expressApp.use("/project", ProjectRouter);
expressApp.use("/account", AccountRouter);

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`Servidor levantado en el puerto ${port}`)
});

export default expressApp;
