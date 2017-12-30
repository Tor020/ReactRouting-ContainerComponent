import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import IPAddressContainer from "./IPAddressContainer";
 
var destination = document.querySelector("#container");
 
ReactDOM.render(
    <div>
        <IPAddressContainer/>
    </div>,
    destination
);



// import React from "react";
// import ReactDom from "react-dom";
// import Main from "./components/Main";
// import "./components/styles/index.css";


// ReactDom.render(
//     <Main/>,
//     document.getElementById('root')
// );