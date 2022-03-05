import React from 'react';
import ReactDom from 'react-dom';

// Normal function ile
// const App = function() {
//     return(
//         <div>Hello World!</div>
//     )
// }

// Arrow function ile
const App = () => {
    return(
        <div>Hello World!</div>
    )
}

ReactDom.render(
    <App/>,
    document.querySelector("#root")
)