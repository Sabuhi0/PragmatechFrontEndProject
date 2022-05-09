import React, {createContext, useState} from 'react';

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            {
                id: Math.random(),
                text: todo
            }
        ]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => {
            return todo.id !== Number(id)
        }));
    }
    return(
        <TodoListContext.Provider value={{ todos, addTodo, removeTodo }}>
            { children }
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider;