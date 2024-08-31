import axios from 'axios'

const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
    const request = axios.get(baseUrl)
    const hardcodedObject = {
        id: "e2g4",
        name: "Hardcoded Person",
        number: "123-4567890"
    }
    return request.then(response => response.data.concat(hardcodedObject))
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const deletePerson = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response)
}

export default { getAll, create, update, deletePerson}
