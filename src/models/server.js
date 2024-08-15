import express from "express";
import cors from "cors";
import userRoutes from "../routes/userRoutes.js";
import { connectDB } from "../config/db.js";
import { envConfig } from '../config/enviroments.js';


const { PORT } = envConfig;


class Server {
  constructor() {
    this.app = express();
    this.dbConnection();
    this.port = PORT;
    this.usuariosPath = "/api/usuarios";
    // Middlewares
    this.middlewares();
    // Rutas de mi aplicación
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // Lectura y parseo del body
    this.app.use(express.json());
    // Conexion a la base de datos
  }

  async dbConnection() {
    await connectDB();
  }

  routes() {
    this.app.use(this.usuariosPath, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

export const server = new Server();
