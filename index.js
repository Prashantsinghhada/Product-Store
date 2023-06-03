 import React from "react";
import ReactDOM from "react-dom";
// import App from  "./reduce";
// import SignUp from "./form"
// import AppTo from "./useEfect";
// import Inc from "./count";
// import AppUseContext from "./useContext";
import PrintApi from "./Apicall";
import  "./productBox.css";
import "./AppiCallREspons.css";







// ReactDOM.render(<App/>,document.getElementById("root2"));



//  ReactDOM.render(<SignUp/>,document.getElementById("root3"));



//  ReactDOM.render(<><h1>Hooks</h1><AppTo/>OK<hr/></>,document.getElementById("root4"));



//  ReactDOM.render(<><Inc/><hr/></>,document.getElementById("root5"));


//  ReactDOM.render(<><AppUseContext/> this<hr/> </>,document.getElementById("root6"));

 ReactDOM.render(<> <div className="pageTitle"> <h1 >Product</h1></div><PrintApi/><hr/> </>,document.getElementById("root7"));
