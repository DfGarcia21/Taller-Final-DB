"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Post_1 = __importDefault(require("../models/Post"));
class PostRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    createTitulo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, torneo } = req.body;
            const newTitulo = new Post_1.default({ title, torneo });
            yield newTitulo.save();
            res.json({ status: res.status });
        });
    }
    readTitulo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const allTitulo = yield Post_1.default.find();
            res.json({ status: 200, misPost: allTitulo });
        });
    }
    readTituloId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const allPostId = yield Post_1.default.findById(id);
            res.json({ status: 200, misPost: allPostId });
        });
    }
    updateTitulo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const titulo = yield Post_1.default.findOneAndUpdate(id, req.body);
            res.json({ status: 200, misPost: titulo });
        });
    }
    deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const titulo = yield Post_1.default.findOneAndUpdate(id, req.body);
            res.json({ status: 200, misPost: titulo });
        });
    }
    routes() {
        this.router.post("/", this.createTitulo);
        this.router.get("/", this.readTitulo);
        this.router.get("/:id", this.readTituloId);
        this.router.put("/:id", this.updateTitulo);
        this.router.delete("/:id", this.deletePost);
    }
}
const tituloRoutes = new PostRoutes();
tituloRoutes.routes();
exports.default = tituloRoutes.router;
