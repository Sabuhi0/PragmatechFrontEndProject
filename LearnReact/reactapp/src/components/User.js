import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
  state = {
    isVisible:false
  }
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isVisible:false
  //   }
  // }
  static defaultProps = {
    name : "Melumat yoxdur",
    webPrograming : "Melumat yoxdur",
    salary : "Melumat yoxdur"
  }

/*
  constructor(props) {
    super(props)
    this.onClickEvent = this.onClickEvent.bind(this);
  }
*/

  onClickEvent = (number,e) => {
    console.log(number)
  }

  render() {
    // Destructuring
    const {name,webPrograming,salary} = this.props
    const {isVisible} = this.state
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline" onClick={this.onClickEvent.bind(this,10)}>{name}</h4>
            <i className="far fa-trash-alt" style={{cursor:"pointer"}}></i>
          </div>
          {
            isVisible ? 
            <div className="card-body">
              <p className="card-text">Web Programing: {webPrograming}</p>
              <p className="card-text">Salary: {salary}</p>
            </div>: null
          }
        </div>
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
