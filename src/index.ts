import dotenv from "dotenv";
import {Server} from "./Server";
import "./config/mongoose"

dotenv.config();

const server = new Server();
server.start();

