import React,{useState,useEffect} from "react";
 function Inc(){
    let [increse,setIncrese]=useState(0);
    useEffect(()=>{
            console.log("Hi,use Effect");
    },[]);

    return(
        <>
        <h4>{increse}</h4>
        <button type="button" onClick={()=>setIncrese(increse+1)}>Click Me</button>
        </>

    )
 }

 export default Inc;