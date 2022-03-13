import React from "react";
import ReactDOM  from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (error) => console.log(error)
//     )
//     return (
//         <div>
//             Hello World!
//         </div>
//     )
// }


class App extends React.Component {
    // state = {latitude: null, errorMessage: ""}
    
    constructor(props) {
        super(props)
        this.state = { latitude: null, errorMessage: "" }
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState( { latitude:position.coords.latitude } )
            },
            (error) => {
                this.setState({errorMessage: error.message})
                console.log(error)
            }
        );
    }

    render() {
        if(this.state.errorMessage && !this.state.latitude) {
            return <div> {this.state.errorMessage} </div>
        }
        if(!this.state.errorMessage && this.state.latitude) {
            return <div> <HemisphereDisplay latitude = {this.state.latitude} /> </div>
        }
        else{
            return <strong>Loading...</strong>
        }
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)