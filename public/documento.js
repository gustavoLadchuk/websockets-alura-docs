import { emitDeleteDocument, emitTextEditor, selectDocument } from "./socket-front-documento.js"

const textEditor = document.getElementById("editor-texto")

const parameters = new URLSearchParams(window.location.search)
const documentName = parameters.get("nome")
const deleteButton = document.getElementById("excluir-documento")

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

deleteButton.addEventListener("click", () => {
    emitDeleteDocument(documentName)
})

export function alert_and_redirect(name) {
    if (name !== documentName) return
    alert(`Documento ${name} foi excluido`)
    window.location.href = "/"
}