import axios from "axios";

const livrosAPI = axios.create({
    baseURL: "http://localhost:8000/"
})

function getLivros() {
    const response = livrosAPI.get('/livros')

    return response.data
}

export {
    getLivros
}