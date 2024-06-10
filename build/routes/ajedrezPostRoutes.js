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
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title } = req.body;
            const newPostN = new Post_1.default({ title });
            const { Pais } = req.body;
            const newPostP = new Post_1.default({ Pais });
            const { ELO } = req.body;
            const newPostA = new Post_1.default({ ELO });
            yield newPostN.save();
            yield newPostP.save();
            yield newPostA.save();
            res.json({ status: res.status });
        });
    }
    routes() {
        this.router.post("/", this.createPost);
    }
}
const jedrezPostRoutes = new PostRoutes();
jedrezPostRoutes.routes();
exports.default = jedrezPostRoutes.router;
