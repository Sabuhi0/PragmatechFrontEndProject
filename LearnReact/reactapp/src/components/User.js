import React, { Component } from 'react'

class User extends Component {
  render() {
    // Destructuring
    const {name,webPrograming,salary} = this.props
    return (
      <div>
        <ul>
            <li>Name : {name}</li>
            <li>Web Programing : {webPrograming}</li>
            <li>Salary : {salary}</li>
        </ul>
      </div>
    )
  }
}

export default User;
