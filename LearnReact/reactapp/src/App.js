import './App.css';

function App() {
  const num = 5;
  const isAuth = true;
  return (
    <div className="App">
      <h1>{3+4}</h1>
      <h2>{"sabuhi".toUpperCase()}</h2>
      <p>{num}</p>
      <h3>
      {
        isAuth ? <p>İstifadəçi qeydiyyatdan keçib</p>: <span>Qeydiyyatdan keç.</span>
      }
      </h3>
    </div>
  );
}

export default App; 
