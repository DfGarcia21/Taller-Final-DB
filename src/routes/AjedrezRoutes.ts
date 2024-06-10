import { Request, Response, Router } from "express";
import Ajedrez from "../models/Ajedrez";
import Post from "../models/Post";

class AjedrezRoutes {

    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    public async createJugador(req: Request, res: Response): Promise<void>{
        try {
            const { title, pais, elo, postId } = req.body;
            const newJugador = new Ajedrez({ title, pais, elo, postId });
            await newJugador.save();
            res.json({ status: 200, Ajedrez: newJugador });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ status: 500, error: error.message });
            } else {
                res.status(500).json({ status: 500, error: "Unknown error" });
            }
        }
    }

    public async readPost(req: Request, res: Response): Promise<void>{
        try {
            const allJugador = await Ajedrez.find().populate("postId");
            res.json({ status: 200, misPost: allJugador });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ status: 500, error: error.message });
            } else {
                res.status(500).json({ status: 500, error: "Unknown error" });
            }
        }
    }

    public async readPostId(req: Request, res: Response): Promise<void>{
        try {
            const { id } = req.params;
            const jugadorId = await Ajedrez.findById(id).populate("postId");
            res.json({ status: 200, misPost: jugadorId });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ status: 500, error: error.message });
            } else {
                res.status(500).json({ status: 500, error: "Unknown error" });
            }
        }
    }

    public async updatePost(req: Request, res: Response): Promise<void>{
        try {
            const { id } = req.params;
            const post = await Ajedrez.findByIdAndUpdate(id, req.body, { new: true });
            res.json({ status: 200, misPost: post });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ status: 500, error: error.message });
            } else {
                res.status(500).json({ status: 500, error: "Unknown error" });
            }
        }
    }

    public async deletePost(req: Request, res: Response): Promise<void>{
        try {
            const { id } = req.params;
            const post = await Ajedrez.findByIdAndRemove(id);
            res.json({ status: 200, misPost: post });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ status: 500, error: error.message });
            } else {
                res.status(500).json({ status: 500, error: "Unknown error" });
            }
        }
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

export default ajedrezRoutes.router;