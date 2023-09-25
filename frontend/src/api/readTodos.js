const API_URL = `http://localhost:4000`

export const readTodos = async () => {

     let response = await fetch(`${API_URL}/todos/items`)

     let data = await response.json()

     return data
}