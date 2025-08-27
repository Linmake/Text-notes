import express from "express";
import connectDB from "./DB/data-base.db.js";
import dotenv from "dotenv";
import { createServer } from "http";
import cors from 'cors';
import FileRouter from "./Routes/file.routes.js";
import FolderRouter from "./Routes/folder.routes.js";
import ProjectRouter from "./Routes/project.routes.js";
import AccountRouter from "./Routes/account.routes.js";
import AssitantRouter from "./Routes/assistant.routes.js";
import cookieParser from "cookie-parser";

// Configuración de dotenv

dotenv.config();
const expressApp = express();
connectDB();  

const server = createServer(expressApp);
 
// Middlewares

expressApp.use(cookieParser());
expressApp.use(express.json());


const allowedOrigins = [
  'http://localhost:3000',
];

expressApp.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permite solo estos métodos HTTP
  allowedHeaders: ['Content-Type', 'Authorization'], // Permite solo estos encabezados
  credentials: true,
}));

// Rutas
expressApp.use("/file", FileRouter);
expressApp.use("/folder", FolderRouter);
expressApp.use("/project", ProjectRouter);
expressApp.use("/account", AccountRouter);
expressApp.use("/assistant", AssitantRouter)

const portUrl = process.env.VITE_API_PORT;

server.listen(portUrl, () => {
  console.log(`Servidor levantado en el puerto ${portUrl}`)
});

export default expressApp;
