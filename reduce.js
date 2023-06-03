
import React,{useReducer,useState} from "react"
const initState={
    isAuth:false,
    label:""
}
const reducer=(state,action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
        return {
            ...state,
            isAuth:true,
            label:"login-success"
        }
        
        case "LOGIN_FAILURE":
            return {
                ...state,
                    isAuth:false,
                    label:"somthing went wrong"
                }

            
    }
}

function Login(){
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [state,dispatch]=useReducer(reducer,initState);

const submitHandler=(e)=>{
    e.preventDefault();
    if(username===password){
        dispatch({type:"LOGIN_SUCCESS"});
    }else{
        dispatch({type:"LOGIN_FAILURE"});
    }
}
return(
    <>
    <form onSubmit={submitHandler}>
        {state.label}
        <div>
            <label>
                userName
            </label>
            <input type="text"  value={username} onChange={(e)=>setUserName(e.target.value)}/>
        </div>
        
        <div>
            <label>
                Password
            </label>
            <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
           <button type="submit">Login</button>
    </form>
    </>
)

}

function App(){
    return (<><hr/>
        <Login/>
        <h1> THE TEST</h1>
        </>
    )
}

export default App;
