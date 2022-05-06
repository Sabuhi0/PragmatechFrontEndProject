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

    const addTodo = (text) => {
        setTodos([
            ...todos,
            {
                id: Math.random(),
                text
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
            <AddNewTodo addTodo={addTodo}/>
        </div>
    )
}

export default ToDoList;