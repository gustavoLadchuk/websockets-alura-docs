import { alert_and_redirect, setTextEditorValue } from "./documento.js";

const socket = io();

export function selectDocument(name) {
    socket.emit("select_document", name, (text) => {
        setTextEditorValue(text)
    })
}

export function emitTextEditor(data) {
    socket.emit("text_editor", data)
}

export function emitDeleteDocument(name) {
    socket.emit("delete_document", name)
}

socket.on("text_editor_client", (text) => {
    setTextEditorValue(text)
})

socket.on("delete_document_sucess", (name) => {
    alert_and_redirect(name)
})

