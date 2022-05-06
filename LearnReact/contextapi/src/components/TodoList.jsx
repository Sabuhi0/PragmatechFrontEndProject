import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

class TodoList extends React.Component {
    static contextType = ThemeContext
    render() {
        const { isDarkTheme, lightTheme, darkTheme } = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return (
            <div style={{background: theme.background, color: theme.text, height: '120px', textAlign: 'center', justifyContent: 'center'}}>
                <p className='item'>Plan the family</p>
                <p className='item'>Go for shopping for dinner</p>
                <p className='item'>Go for a walk</p>
            </div>
        )
    }
}

export default TodoList;