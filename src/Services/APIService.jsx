import axios from "axios";

let host = 'localhost'
let port = '8989'

class APIService {

    static config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }

    static getServerLogs() {
        return axios.get(`http://${host}:${port}/access/logs`)
    }

    static getBookData(bookId) {
        return axios.get(`http://${host}:${port}/books/${bookId}`)
    }

    static getAllBookRequests() {
        return axios.get(`http://${host}:${port}/access/requests`)
    }

    static registerUser(body) {
        return axios.post(`http://${host}:${port}/user/registration`, body)
    }

    static authUser(body) {
        return axios.post(`http://${host}:${port}/user/auth`, body)
    }

    static getIssuedBooks(emailId) {
        return axios.get(`http://${host}:${port}/access/${emailId}`, this.config)
    }

    static getAllUsers() {
        return axios.get(`http://${host}:${port}/user/all`, this.config)
    }

    static getAccessibleData() {
        return axios.get(`http://${host}:${port}/books`)
    }

    static getSearchedData(body) {
        return axios.post(`http://${host}:${port}/books/search`, body, APIService.config)
    }

    static getBook(id) {
        return axios.get(`http://localhost:8989/books/download/${id}`, APIService.config)
    }

    static getAccessesByEmail(emailId) {
        return axios.get(`http://localhost:8989/access/${emailId}`, APIService.config)
    }

    static UpdateAccessByCSV(formData) {
        return axios.post('http://localhost:8989/access/update', formData, APIService.config)
    }

    static addBook(formData) {
        return axios.post('http://localhost:8989/books/add', formData, APIService.config)
    }
}

export {
    APIService
}