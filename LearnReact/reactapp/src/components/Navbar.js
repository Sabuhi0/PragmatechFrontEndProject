import React from 'react'

// With normal function
/*
function Navbar() {
  return (
    <div>
        <ul className='d-flex'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}
*/

// With arrow function
const Navbar = (props) => {
  return (
    <div>
        <h3>{props.title}</h3>
        <ul className='d-flex'> 
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar;
