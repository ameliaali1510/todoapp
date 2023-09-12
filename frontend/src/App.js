import Navbar from "./components/Navbar"
import AddTodo from "./pages/AddTodo"
import Home from "./pages/Home"
import EditTodo from "./pages/EditTodo"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './css/Main.css'
const App = () => {
  return (
    <div id='main'>
      <BrowserRouter>
        <h1>Todo List</h1>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/add-todo'
            element={<AddTodo />}
          />
          <Route
            // dynamic :id to create custom route
            path='/:id'
            element={<EditTodo />}
          />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App