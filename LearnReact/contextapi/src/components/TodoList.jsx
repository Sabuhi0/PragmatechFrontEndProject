import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

const TodoList = () => {
    const { isDarkTheme, lightTheme, darkTheme, changeTheme } = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
        <div style={{background: theme.background, color: theme.text, height: '120px', textAlign: 'center'}}>
            <p className='item'>Plan the family</p>
            <p className='item'>Go shopping for dinner</p>
            <p className='item'>Go for a walk</p>
            <button className='ui button primary' onClick={changeTheme} style={{marginTop:'8px'}}>Change the theme</button>
        </div>
    )
}

export default TodoList;
