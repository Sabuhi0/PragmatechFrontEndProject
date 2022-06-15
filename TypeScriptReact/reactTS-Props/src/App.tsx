import Header from "./components/Header";

const App = () =>  {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-xl">
        <Header name= 'Sabuhi' age={17} country="Azerbaijan"/>
      </h1>
    </div>
  )
}

export default App;
