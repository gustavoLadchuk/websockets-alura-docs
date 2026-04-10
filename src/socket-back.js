import io from "./server.js"

io.on("connection", (socket) => {
    console.log("Um cliente se conectou ao servidor, ID:", socket.id)

    socket.on("text_editor", (data) => {
        socket.broadcast.emit("text_editor_client", data)
    })
})