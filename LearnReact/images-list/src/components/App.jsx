import React from "react";
import Search from "./Search";

class App extends React.Component {
    onSearchSubmit = (entry) => {
        console.log(entry)
    }
    render() {
        return(
            <div className="ui container" style={{marginTop:'30px'}}> 
                <Search onSearchSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}

export default App;