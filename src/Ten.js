
import React, { useEffect, useState } from "react";

function Ten() {
    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log("use effect");
    }, [count]);

    const increment = () => {
        setCount(prevCount => prevCount + 2);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 2);
    };

    const AddToCart = () => {
        setCount(1);
    };

    return (
        
        
        <div className="btnUpdateCount">
            {(count===0)}?
            <div>
                <button onClick={AddToCart}>{increment}</button>
                <button onClick={AddToCart}>{decrement}</button>
              
            </div>
            <h1>Count: {count}</h1>
            <div className="btn btn-primary">
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                {count >= 50 && <button onClick={AddToCart}>Add to Cart</button>}
                {count <=0  && <button onClick={AddToCart}>Add to Cart</button>}
                
            </div>
        </div>
    );
}

export default Ten;

