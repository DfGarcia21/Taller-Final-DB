"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const validateToken_1 = require("../libs/validateToken");
class auth {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.post("/signup", auth_controller_1.signup);
        this.router.post("/signin", auth_controller_1.signin);
        this.router.get("/profile", validateToken_1.TokenValidation, auth_controller_1.profile);
    }
}
const authRoutes = new auth();
authRoutes.routes();
exports.default = authRoutes.router;
