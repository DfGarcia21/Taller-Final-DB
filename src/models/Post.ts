import { Schema, model } from "mongoose";

const PostSchema = new  Schema({
    title: {type: String, required: true},
    torneo: {type: String, required: true},
    createAt: {type: Date, default: Date.now}
});

export default model("TitulosAjedrez", PostSchema);