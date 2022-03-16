import React from "react";
import Search from "./Search";
import axios from 'axios'
import ImageList from "./ImagesList";

class App extends React.Component {

    state = { images: [] }

    onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=21115300-b484d5aa3a5ce17fbbdeef09b&q=${entry}&image_type=photo`);
        this.setState({images:response.data.hits})
    }

    render() {
        return(
            <div className="ui container" style={{marginTop:'30px'}}> 
                <Search onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;