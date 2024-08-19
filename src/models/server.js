import express from "express";
import cors from "cors";
import userRoutes from "../controllers/user.controller.js";
import productoRoutes from "../controllers/product.controller.js";
import pedidosRoutes from "../controllers/purchase.controller.js";
import { connectDB } from "../config/db.js";
import { envConfig } from '../config/enviroments.js';


const { PORT } = envConfig;


class Server {
  constructor() {
    this.app = express();
    this.dbConnection();
    this.port = PORT;
    this.usuariosPath = "/api/users";
    this.productosPath = "/api/products";
    this.pedidosPath = "/api/purchases";
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
    this.app.use(this.productosPath, productoRoutes);
    this.app.use(this.pedidosPath, pedidosRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

export const server = new Server();
