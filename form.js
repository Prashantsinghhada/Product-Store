import React,{useState} from "react";


  function SignUp(){
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const SubmitHandler=(e)=>{
            e.preventDefault();
            console.log(firstName);
            console.log(lastName);
            console.log(email);
            console.log(password);
    }
    return(
        <>
        <form onSubmit={SubmitHandler}>
        <lable>firstName</lable>
            <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        <lable>lastName</lable>
            <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
        <lable>email</lable>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <lable>password</lable>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">Submit</button>
        </form>
        </>
    )

}

export default SignUp;