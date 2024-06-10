import { Request, Response, Router } from "express";
import Post from "../models/Post";

class PostRoutes {

    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    public async createTitulo(req: Request, res: Response): Promise<void>{
        const { title, torneo } = req.body;
        const newTitulo = new Post({title, torneo});
        await newTitulo.save();
        res.json({status: res.status}); 
    }

    public async readTitulo(req: Request, res: Response): Promise<void>{
        const allTitulo = await Post.find();
        res.json({status: 200, misPost: allTitulo}); 
    }

    public async readTituloId(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const allPostId = await Post.findById(id);
        res.json({status: 200, misPost: allPostId}); 
    }


    public async updateTitulo(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const titulo = await Post.findOneAndUpdate(id, req.body);
        res.json({status: 200, misPost: titulo}); 
    }

    public async deletePost(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const titulo = await Post.findOneAndUpdate(id, req.body);
        res.json({status: 200, misPost: titulo}); 
    }

    routes(){
        this.router.post("/", this.createTitulo);
        this.router.get("/", this.readTitulo);
        this.router.get("/:id", this.readTituloId);
        this.router.put("/:id", this.updateTitulo);
        this.router.delete("/:id", this.deletePost);
    }

}

const tituloRoutes = new PostRoutes();
tituloRoutes.routes();

export default tituloRoutes.router;