import "dotenv/config";
import { findDocument, updateDocument } from "./db-documents.js"
import io from "./server.js"


io.on("connection", (socket) => {
    console.log("Um cliente se conectou ao servidor, ID:", socket.id)

    socket.on("text_editor", async ({ text, documentName }) => {

        const update = await updateDocument(documentName, text)

        if (update.modifiedCount > 0) {
            socket.to(documentName).emit("text_editor_client", text)
        }
    })

    socket.on("select_document", async (documentName, responseText) => {
        socket.join(documentName)

        const document = await findDocument(documentName)

        if (document) {
            responseText(document.texto)
        }

    })
})

