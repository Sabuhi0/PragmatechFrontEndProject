import React, {createContext, useState} from 'react';

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([{}])
    
}