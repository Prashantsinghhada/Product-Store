import React,{useEffect} from "react";
const students=[{name:"jank"},{name:"loki"},{name:"crisanu"}];


function Student({name}){
    useEffect(()=>{
    console.log("hey I am using  useEfact()");
},[]);

return(
<>
    {console.log("student")}
    <h3>hey my name is {name}</h3>
</>
)
}
 
function AppTo(){
    
    return(
        <>
        {students.map((student)=><Student{...student}/>)}
        </>
    )
}

export default AppTo;