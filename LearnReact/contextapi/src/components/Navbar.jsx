import React from 'react'

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <h2 className='ui centered header'>Pragmatech</h2>
          <div className='ui three buttons'>
            <button className='ui button'>Overview</button>
            <button className='ui button'>Contact</button>
            <button className='ui button'>Support</button>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
