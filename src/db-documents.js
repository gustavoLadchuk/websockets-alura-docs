import { collectionDocuments } from "./db-connect.js"

export function findDocument(name) {
    const document = collectionDocuments.findOne({ nome: name })

    return document
}

export function updateDocument(name, text) {
    const update = collectionDocuments.updateOne(
        { nome: name },
        {
            $set:
                { texto: text }
        })
    return update
}