import { Schema, model } from "mongoose";

const AjedrezSchema = new Schema({
    title: { type: String, required: true },
    pais: { type: String, required: true },
    elo: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
    postId: { type: Schema.Types.ObjectId, ref: "TitulosAjedrez" }
});

export default model("Ajedrez", AjedrezSchema);
