import { setTextEditorValue } from "./documento.js";

const socket = io();

export function emitTextEditor(value) {
    socket.emit("text_editor", value)
}

socket.on("text_editor_client", (text) => {
    setTextEditorValue(text)
})