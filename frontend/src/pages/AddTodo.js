import { useState } from "react"
import { addTodo } from "../api/addTodo"


const AddTodo = () => {
    const [userInput, setUserInput] = useState("")

    const handler = async (event) => {
        event.preventDefault()

        let response = await addTodo(userInput)
        console.log(response)
    }

    return (
        <div className="App">
            <h1>
                add item
            </h1>
            <form id="to-do-form" onSubmit={handler}>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}

                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default AddTodo;
