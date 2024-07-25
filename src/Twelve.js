import { useState } from "react";
function Twelve(){
    const [review, setReview]=useState('');
    const [reviewToDisplay, setDisplay]=useState('');
    const addReview =()=>{
        console.log("Adding review....");
        setDisplay(review);
        console.log(review);
     
    }
    const inputValueChange=(event)=>{
        setReview(event.target.value);
    
       
        
    }
    return(
        <div>
            <input type="text" value={review} placeholder="Enter a review" onChange={inputValueChange}></input>
            <button className="btn btn-dark" onClick ={addReview}>Add review</button>
            <p>{reviewToDisplay}</p>
        </div>
    )}

export default Twelve;

