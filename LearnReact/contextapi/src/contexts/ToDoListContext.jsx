import React, {createContext, useReducer } from 'react';
import { todosReducer } from '../reducers/todosReducers';

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todosReducer, [
        {text: 'Plan the family', id:1},
        {text: 'Go shopping for dinner', id:2},
        {text: 'Go for a walk', id:3}
    ]);

    return(
        <TodoListContext.Provider value={{ todos, dispatch }}>
            { children }
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider;