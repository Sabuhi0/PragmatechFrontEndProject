import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
  static defaultProps = {
    name : "Melumat yoxdur",
    webPrograming : "Melumat yoxdur",
    salary : "Melumat yoxdur"
  }
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

// User.defaultProps = {
//   name : "Melumat yoxdur",
//   webPrograming : "Melumat yoxdur",
//   salary : "Melumat yoxdur"
// }

User.protoType = {
  name:PropTypes.string.isRequired,
  webPrograming:PropTypes.string.isRequired,
  salary:PropTypes.string.isRequired
}
export default User;
