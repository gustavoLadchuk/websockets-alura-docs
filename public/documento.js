import { emitTextEditor, selectDocument } from "./socket-front-documento.js"

const textEditor = document.getElementById("editor-texto")

const parameters = new URLSearchParams(window.location.search)
const documentName = parameters.get("nome")

const documentTitle = document.getElementById("titulo-documento")
documentTitle.textContent = documentName || "Documento sem titulo"

selectDocument(documentName)

textEditor.addEventListener("keyup", () => {
    emitTextEditor({
        text: textEditor.value,
        documentName
    })
})

export function setTextEditorValue(text) {
    textEditor.value = text
}