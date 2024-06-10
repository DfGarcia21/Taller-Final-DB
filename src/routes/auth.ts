import { Router } from "express";
import { signup, signin, profile } from "../controllers/auth.controller";
import { TokenValidation } from "../libs/validateToken";

class auth {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
  routes() {
    this.router.post("/signup", signup);
    this.router.post("/signin", signin);

    this.router.get("/profile", TokenValidation, profile);
  }
}

const authRoutes = new auth();
authRoutes.routes();

export default authRoutes.router;
