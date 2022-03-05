import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
    return(
        <div style={{fontSize:'20px',color:'red'}}>Hello World!</div>
    )
}

ReactDom.render(
    <App/>,
    document.querySelector("#root")
)