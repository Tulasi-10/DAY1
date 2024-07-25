import {useState} from "react";
function Eight(){
    const [count,setCount] = useState(1);
    const btnDecrement=()=>{
        if(count>0)
            setCount(count-1);

    }
    const btnIncrement=()=>{
        if(count<=500)
                setCount(count+1);
    }

    return(
        <div>
            {(count===0)?
            <div>
            <button className="btn btn-outline-dark">Add to Cart</button>
            </div>
            :
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div>
            <button className="btn btn-danger" onClick={btnDecrement}>-</button>
            </div>
            <div>
            <button className="btn btn-outline-dark">{count}</button>
            </div>
            <div>
            <button className="btn btn-success" onClick={btnIncrement}>+</button>
            </div>
        </div>
}
</div>
    );
}
export default Eight;