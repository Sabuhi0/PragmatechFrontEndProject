import React, { useState } from "react";
import AddNewTodo from "./AddNewTodo";


const ToDoList = () => {
    const [todos, setTodos] = useState([
        {   
            id: 1,
            text:'Pay bills'
        },
        {   
            id: 2,
            text:'Do your homework'
        },
        {   
            id: 3,
            text:'Feed the cat'
        }
    ])

    const addTodo = () => {
        setTodos([
            ...todos,
            {
                id: Math.random(),
                text: 'Learn hooks' 
            }
        ]);
    };

    return(
        <div>
            <ul>
                {
                    todos.map(todo => {
                        return(
                            <li key={todo.id}>{todo.text}</li>
                        )
                    })
                }
            </ul>
            <button onClick={addTodo}>Add a todo</button>
        </div>
    )
}

export default ToDoList;