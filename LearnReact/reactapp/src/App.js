import Navbar from './components/Navbar';
import User from './components/User';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar title = "User App"/>
        <hr />
        <User
          name = "Sabuhi"
          webPrograming = "FrontEnd Developers"
          salary = "800$"
        />
        <User
          name = "Rahman"
          webPrograming = "BackEnd Developers"
          salary = "900$"
        />
      </div>
    </div>
  );
}

export default App; 
