import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io"

const app = express();
const PORT = process.env.PORT || 3000;

const currentPath = url.fileURLToPath(import.meta.url);
const publicDir = path.join(currentPath, "../..", "public");

app.use(express.static(publicDir));

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => console.log(`Servidor inicializado na porta ${PORT}`));

const io = new Server(httpServer)

io.on("connection", () => {
    console.log("Um cliente se conectou ao servidor")
})

