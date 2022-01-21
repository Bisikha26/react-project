import React, {useState} from "react"
import {Form, Container, Button} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css";
import { FaPlus } from "react-icons/fa";

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [text, setText] = useState("");

    const addTodo = () => {
        // Purano data lai preserve garna ...todoList
        setTodoList([...todoList], {data: text, date: getDate()});
    }

    const getDate = () => {
        let date = new Date();
        return `${date.getFullYear()}`
    }

    return (<div>
        <Container className="mt-3 text-center">
            <h3>Todo List App</h3>
            <Form.Control type="text" value={text} onChange={(e) => setText(e.target.value)}/>

            <Button className="mt-3" onClick={addTodo}>
                <FaPlus />
                <p className="ml-3">Add</p>
            </Button>

            <br/>
            {todoList ? todoList.map((todo) => {
                return <>{todo.data}</>
            }): "no todo"}
        </Container>
    </div>)
}

export default TodoList;

