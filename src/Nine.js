import { useEffect,useState } from "react";
function Nine(){
    const [count,setCount]=useState(1);
    useEffect(() =>{
    //setCount(5);
        console.log("use effect ");
},[count]);
    const btnUpdateCount =()=>{
        setCount(count+2); 
      }
    return(
        <div>
            <h1>count {count}</h1>
            <button className="btn btn-primary" onClick={btnUpdateCount}>Click me</button>
        </div>
    );
    }
    export default Nine;
