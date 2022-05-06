import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends React.Component {
  // static contextType = ThemeContext
  render() {
    return (
      <AuthContext.Consumer>{(authContext) => (
        <ThemeContext.Consumer>{(themeContext) => {
          const { isDarkTheme, lightTheme, darkTheme } = themeContext;
          const { isLoogedIn, changeAuthStatus } = authContext
          const theme = isDarkTheme ? darkTheme : lightTheme
          return(
            <div>
              <nav style={{ background: theme.background, color: theme.text, height: '120px' }}>
                <h2 style={{ textAlign: 'center' }}>Pragmatech</h2>
                <p style={{textAlign: 'center'}} onClick={changeAuthStatus}> { isLoogedIn ? "Login": 'Log out' }</p>
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
      )}
      </AuthContext.Consumer>
      
    )
  }
}

export default Navbar;
