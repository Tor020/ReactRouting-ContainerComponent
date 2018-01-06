import React from "react";
import ReactDom from "react-dom";
import Main from "./components/Main";
import "./components/styles/index.css";

// https://stackoverflow.com/questions/31852933/why-es6-react-component-works-only-with-export-default/31853887#31853887


const root = document.querySelector("#container");
 
ReactDom.render(
    <Main/>,
    root
);