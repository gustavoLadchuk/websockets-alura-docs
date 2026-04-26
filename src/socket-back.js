import "dotenv/config";
import { addDocument, deleteDocument, findDocument, getDocuments, updateDocument } from "./db-documents.js"
import io from "./server.js"


io.on("connection", (socket) => {
    socket.on("get_documents", async (returnDocuments) => {
        const documents = await getDocuments()

        returnDocuments(documents)
    })

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

    socket.on("add_document", async (name) => {
        const alreadyExists = await findDocument(name) !== null

        if (alreadyExists) {
            socket.emit("already_existent_document", name)
            return
        }

        const result = await addDocument(name)

        if (result.acknowledged) {
            io.emit("add_document_interface", name)
        }
    })

    socket.on("delete_document", async (name) => {
        const result = await deleteDocument(name)

        if (result.deletedCount) {
            io.emit("delete_document_sucess", name)
        }
    })
})

