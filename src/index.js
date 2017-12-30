import React from "react";
import ReactDom from "react-dom";
import Main from "./components/Main";
import "./components/styles/index.css";

const root = document.querySelector("#container");
 

ReactDom.render(
    <Main/>,
    root
);