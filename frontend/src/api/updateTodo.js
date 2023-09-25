const API_URL = `http://localhost:4000`

export const updateTodo = async (todo) => {

    const response = await fetch(`${API_URL}/todos/items/${todo._id}`, {

        method: 'PATCH',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            text: todo.text
        })
    })
    const json = await response.json()
    return json
}