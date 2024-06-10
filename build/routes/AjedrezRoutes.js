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
const Ajedrez_1 = __importDefault(require("../models/Ajedrez"));
class AjedrezRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    createJugador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, pais, elo, postId } = req.body;
                const newJugador = new Ajedrez_1.default({ title, pais, elo, postId });
                yield newJugador.save();
                res.json({ status: 200, Ajedrez: newJugador });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ status: 500, error: error.message });
                }
                else {
                    res.status(500).json({ status: 500, error: "Unknown error" });
                }
            }
        });
    }
    readPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allJugador = yield Ajedrez_1.default.find().populate("postId");
                res.json({ status: 200, misPost: allJugador });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ status: 500, error: error.message });
                }
                else {
                    res.status(500).json({ status: 500, error: "Unknown error" });
                }
            }
        });
    }
    readPostId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const jugadorId = yield Ajedrez_1.default.findById(id).populate("postId");
                res.json({ status: 200, misPost: jugadorId });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ status: 500, error: error.message });
                }
                else {
                    res.status(500).json({ status: 500, error: "Unknown error" });
                }
            }
        });
    }
    updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const post = yield Ajedrez_1.default.findByIdAndUpdate(id, req.body, { new: true });
                res.json({ status: 200, misPost: post });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ status: 500, error: error.message });
                }
                else {
                    res.status(500).json({ status: 500, error: "Unknown error" });
                }
            }
        });
    }
    deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const post = yield Ajedrez_1.default.findByIdAndRemove(id);
                res.json({ status: 200, misPost: post });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ status: 500, error: error.message });
                }
                else {
                    res.status(500).json({ status: 500, error: "Unknown error" });
                }
            }
        });
    }
    routes() {
        this.router.post("/create", this.createJugador);
        this.router.get("/", this.readPost);
        this.router.get("/:id", this.readPostId);
        this.router.put("/:id", this.updatePost);
        this.router.delete("/:id", this.deletePost);
    }
}
const ajedrezRoutes = new AjedrezRoutes();
ajedrezRoutes.routes();
exports.default = ajedrezRoutes.router;
