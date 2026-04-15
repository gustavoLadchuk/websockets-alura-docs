import io from "./server.js"

const documents = [
    {
        name: "JavaScript",
        text: "texto de javascript"
    },
    {
        name: "Node",
        text: "texto de node"
    },
    {
        name: "Socket.io",
        text: "texto de socket io"
    }
]

io.on("connection", (socket) => {
    console.log("Um cliente se conectou ao servidor, ID:", socket.id)

    socket.on("text_editor", ({ text, documentName }) => {

        const document = findDocument(documentName)

        if (document) {
            document.text = text
            socket.to(documentName).emit("text_editor_client", text)
        }
    })

    socket.on("select_document", (documentName, responseText) => {
        socket.join(documentName)

        const document = findDocument(documentName)

        if (document) {
            responseText(document.text)
        }

    })
})

function findDocument(name) {
    const document = documents.find((document) => {
        return document.name === name
    })

    return document
}