import Navbar from './components/Navbar';
import Users from './components/Users';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Sabuhi",
        webPrograming: "FrontEnd Developers",
        salary: "800$"
      },
      {
        id: 2,
        name: "Rahman",
        webPrograming: "BackEnd Developers",
        salary:"900$"
      },
      {
        id: 3,
        name: "Huseyn",
        webPrograming: "BackEnd Developers",
        salary: "1000$"
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <div className='container'>
          <Navbar title = "User App"/>
          <hr />
          <Users users = {this.state.users}
    
          />
        </div>
      </div>
    );
  }
}

export default App; 
