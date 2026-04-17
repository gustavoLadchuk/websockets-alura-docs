import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.CONNECTION_STRING)

let collectionDocuments

try {
    await client.connect()

    const db = client.db("alura-websockets")
    const documents = db.collection("documentos")

    collectionDocuments = documents

    console.log("Conectado ao banco de dados com sucesso.")
} catch (error) {
    console.log(error)
}

export { collectionDocuments }