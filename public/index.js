import { emitAddDocument } from "./socket-front-index.js"

const documentList = document.getElementById("lista-documentos")
const form = document.getElementById("form-adiciona-documento")
const inputDocument = document.getElementById("input-documento")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    emitAddDocument(inputDocument.value)
    inputDocument.value = ""
})

export function insertDocumentLink(documentName) {
    documentList.innerHTML +=
        `<a 
        href="documento.html?nome=${documentName}"
         class="list-group-item list-group-item-action"
         id="document-${documentName}"
         >
        ${documentName}
      </a>`
}

export function removeDocumentLink(name) {
    const doc = document.getElementById(`document-${name}`)
    console.log(doc)

    documentList.removeChild(doc)
}