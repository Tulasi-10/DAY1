import { useRef } from "react";

function Submit(){
    const firstRef = useRef(null);
    const formSubmitted=(event)=>{
        console.log("formSubmitted");
        event.preventDefault();//
        console.log(firstRef.current.value);
        firstRef.current.value=" ";//claer value
    }
    return (
        <div>
            <form onSubmit={formSubmitted}>
                <input type="text" ref={firstRef}/>
                <button type="submit">Submit</button>
            </form>
        
        </div>
    );
}
export default Submit;