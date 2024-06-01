import Express from "express";
import ideaRouter from "./routes/idea.routes.js";
import proyectRouter from "./routes/proyect.routes.js";
import carpetaRouter from "./routes/carpeta.routes.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import indexRouter from "./routes/index.routes.js";

const expressApp = Express();

const _fileName = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_fileName);

expressApp.use(bodyParser.json());
expressApp.use(Express.urlencoded());
expressApp.use(Express.static(path.join(_dirname, "/public")));

expressApp.use("/", indexRouter);
expressApp.use("/idea", ideaRouter);
expressApp.use("/carpeta", carpetaRouter);
expressApp.use("/proyecto", proyectRouter);

dotenv.config();

const port = process.env.PORT || 3000;

expressApp.listen(port, () => {
  console.log(`Servidor levantado en el puerto ${port}`);
});

export default expressApp;
