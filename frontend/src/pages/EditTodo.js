import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getTodo } from "../api/getTodo"
import { updateTodo } from "../api/updateTodo"

const EditTodo = () => {
    const { id } = useParams();
    const [toUpdate, setToUpdate] = useState('');
    const [userInput, setUserInput] = useState('');

    const submitHandler = async (event) => {
        event.preventDefault();

        let obj = {
            _id: toUpdate._id,
            text: userInput
        }

        let response = await updateTodo(obj);
        console.log(response);
        alert('edited item');
    }

    useEffect(() => {
        const fetchTodo = async () => {
            let data = await getTodo(id);
            setToUpdate(data);
        }
        fetchTodo();
    }, [])

    return (
        <div className="App">
            <h1>edit</h1>
            <h2>{toUpdate.text}</h2>

            <form id="to-do-form" onSubmit={submitHandler}>
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

export default EditTodo;
