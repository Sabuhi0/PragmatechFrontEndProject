import React, { useState, useEffect } from "react";
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

    const [count, setCount] = useState(0);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            {
                id: Math.random(),
                text
            }
        ]);
    };

    useEffect(() => {
        console.log("useEffect todos", todos)
    }, [todos]) 

    useEffect(() => {
        console.log("useEffect count", count)
    }, [count])

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
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
    )
}

export default ToDoList;