// // import Card from "./Card";
// function Seventh(props) {
//     const width = 400;
//     return (
//         <div>
//             <img 
//                 src="images.jpg" 
//                 width={width}
//                 style={{ border: '10px solid #FF0000', borderRadius: '50px' }} 
//                 alt="person"
//             />
            
//             <button type="button" class="btn">Base class</button>
//         </div>
//     );
// }

// export default Seventh;
function Seventh(props) {
    return (

        <div>
            <img 
                 src="images.jpg" 
                 width={300}
                 style={{ border: '10px solid #FF0000', borderRadius: '50px' }}
                 alt="person"/>
            <div style={{display:"block",justifyContent:"center",alignItems:"center",marginLeft:"35PX"}}> 
            <h1>{props.program}</h1>
            <p>{props.col}</p>
            <br></br>
            <button type="button" class="btn btn-primary">Primary</button>
            </div>
            
        </div>

    );
}

export default Seventh;
