import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import tituloRoutes from "./routes/PostRoutes";
import AjedrezRoutes from "./routes/AjedrezRoutes";
import authRoutes from "./routes/auth";

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.rutas();
  }

  config() {
    this.app.set("port", process.env.PORT || 4040);
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(cors());
  }

  public rutas() {
    this.app.use('/router', authRoutes);
    this.app.use('/api/Titulos', tituloRoutes);
    this.app.use('/api/ajedrez', AjedrezRoutes);
  }

  public start() {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server is listening on port", this.app.get("port"));
    });
  }
}

export { Server };
