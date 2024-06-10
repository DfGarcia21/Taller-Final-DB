"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AjedrezSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    pais: { type: String, required: true },
    elo: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
    postId: { type: mongoose_1.Schema.Types.ObjectId, ref: "TitulosAjedrez" }
});
exports.default = (0, mongoose_1.model)("Ajedrez", AjedrezSchema);
