import { setTextEditorValue } from "./documento.js";

const socket = io();

export function selectDocument(name) {
    socket.emit("select_document", name, (text) => {
        setTextEditorValue(text)
    })
}

export function emitTextEditor(data) {
    socket.emit("text_editor", data)
}

socket.on("text_editor_client", (text) => {
    setTextEditorValue(text)
})