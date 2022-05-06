import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends React.Component {
  static contextType = ThemeContext
  render() {
    return (
      <ThemeContext.Consumer>{(context) => {
        const { isDarkTheme, lightTheme, darkTheme } = context;
        const theme = isDarkTheme ? darkTheme : lightTheme
        return(
        <div>
          <nav style={{ background: theme.background, color: theme.text, height: '120px' }}>
            <h2 style={{ textAlign: 'center' }}>Pragmatech</h2>
            <div className='ui three buttons'>
              <button className='ui button'>Overview</button>
              <button className='ui button'>Contact</button>
              <button className='ui button'>Support</button>
            </div>
          </nav>
        </div>
      )
      }}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar;
