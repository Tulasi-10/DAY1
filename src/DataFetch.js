import { useEffect, useState } from "react";


function DataFetch(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fecthMyData=async ()=>{
            const res=await fetch('https://jsonplaceholder.typicode.com/posts')
            console.log(res.ok);
            console.log(await res.json);
            const resData = await res.json();
            setData(resData);
            console.log(resData)
        }
        fecthMyData();
    })
    return(
        <div>
            <h2>Fetching Data</h2>
            <table className="table table-dark table-striped-columns">
           
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">UserId</th>
      <th scope="col">Title</th>
      <th scope="col">body</th>
    </tr>
  </thead>
  <tbody>
  {data.map((dataItem,index)=>
    <tr key={index}>
        <td>{dataItem.id}</td>
        <td>{dataItem.userId}</td>
        <td>{dataItem.title}</td>
        <td>{dataItem.body}</td>
     </tr>
  )}
  </tbody>
 
</table>
        </div>
    )
}
export default DataFetch;