import { emitTextEditor } from "./socket-front-documento.js"

const textEditor = document.getElementById("editor-texto")

textEditor.addEventListener("keyup", () => {
    emitTextEditor(textEditor.value)
})

export function setTextEditorValue(text) {
    textEditor.value = text
}