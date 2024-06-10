"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const PostRoutes_1 = __importDefault(require("./routes/PostRoutes"));
const AjedrezRoutes_1 = __importDefault(require("./routes/AjedrezRoutes"));
const auth_1 = __importDefault(require("./routes/auth"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.rutas();
    }
    config() {
        this.app.set("port", process.env.PORT || 4040);
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, helmet_1.default)());
        this.app.use((0, compression_1.default)());
        this.app.use((0, cors_1.default)());
    }
    rutas() {
        this.app.use('/router', auth_1.default);
        this.app.use('/api/Titulos', PostRoutes_1.default);
        this.app.use('/api/ajedrez', AjedrezRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server is listening on port", this.app.get("port"));
        });
    }
}
exports.Server = Server;
