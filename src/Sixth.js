function Sixth(){
  const names = ["Tulasi","Sowji"]
  return(
    <div>
    
        {names.map((names,index)=>
        <li key={index}>{names}</li>)}
     
     </div>)

}
export default Sixth;