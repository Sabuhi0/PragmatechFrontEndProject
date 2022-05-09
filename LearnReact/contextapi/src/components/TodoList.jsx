import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoListContext } from '../contexts/ToDoListContext';

const TodoList = () => {
    const [todo, setTodo] =  useState('')
    const { isDarkTheme, lightTheme, darkTheme, changeTheme } = useContext(ThemeContext);
    const {todos, addTodo, removeTodo} =  useContext(TodoListContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        addTodo(todo)
    }

    const handleRemoveTodo = (e) => {
        const id = e.target.id;
        removeTodo(id)
    }
    return (
        <div style={{background: theme.background, color: theme.text, textAlign: 'center'}}>
            {
                todos.length ? (
                    todos.map(todo => {
                        return (
                            <p className='item' id={todo.id} onClick={handleRemoveTodo} key={todo.id}>{todo.text}</p>
                        )  
                    })
                ) : (
                    <h1>You have no todos</h1>
                )
            }
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="todo">Add todo:</label>
                <input type="text" id='todo' onChange={handleChange}/>
                <input type="submit" className='ui button primary' value='Add new todo' style={{marginRight: '4px'}} />
                <button className='ui button primary' onClick={changeTheme} style={{marginTop:'8px'}}>Change the theme</button>
            </form>
        </div>
    )
}

export default TodoList;
