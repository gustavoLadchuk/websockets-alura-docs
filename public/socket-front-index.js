import { insertDocumentLink, removeDocumentLink } from "./index.js"

const socket = io()

socket.emit("get_documents", (documents) => {
    documents.forEach((document) => {
        insertDocumentLink(document.nome)
    })
})

export function emitAddDocument(name) {
    socket.emit("add_document", name)
}

socket.on("add_document_interface", (name) => {

    insertDocumentLink(name)
})

socket.on("already_existent_document", (name) => {
    alert(`Documento ${name} já existe!`)
})

socket.on("delete_document_sucess", (name) => {
    console.log(name)
    removeDocumentLink(name)
})