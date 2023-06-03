import React,{useState,useContext} from "react";
import App from "./reduce";
const DataComponet=React.createContext();

function A(){
    const [name,setName]=useState("jake");
    return(
        <DataComponet.Provider value={name}><B/></DataComponet.Provider>
    )
}

function B({}){

    return ( <><C/></>)
    
}

function C(){

    const data=useContext(DataComponet)
return (<h4>Hi I'm a Component created by {data}</h4>)

}
 function AppUseContext(){
    return(<A/>)
}
export default AppUseContext;