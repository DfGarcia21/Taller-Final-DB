"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostASchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    Pais: { type: String, required: true },
    ELO: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)("Post", PostASchema);
