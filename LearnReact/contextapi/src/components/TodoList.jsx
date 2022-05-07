import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoListContext } from '../contexts/ToDoListContext';

const TodoList = () => {
    const { isDarkTheme, lightTheme, darkTheme, changeTheme } = useContext(ThemeContext);
    const {todos} =  useContext(TodoListContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
        <div style={{background: theme.background, color: theme.text, height: '120px', textAlign: 'center'}}>
            {
                todos.length ? (
                    todos.map(todo => {
                        return <p className='item' key={todo.id}>{todo.text}</p>  
                    })
                ) : (
                    <h1>You have no todos</h1>
                )
            }
            <button className='ui button primary' onClick={changeTheme} style={{marginTop:'8px'}}>Change the theme</button>
        </div>
    )
}

export default TodoList;
