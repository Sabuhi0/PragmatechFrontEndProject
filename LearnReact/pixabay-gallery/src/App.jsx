
const formatName = ( [name, lastName, age] ) => {
  return name + ' ' + lastName + " " + age;
}

const user = ['Sabuhi', "Gasimov", 17]

function App() {
  return (
      <div className="App text-center text-red-600 text-[30px]">
        <h1>Salam, {formatName(user)}</h1>
      </div>
  );
}


export default App;
