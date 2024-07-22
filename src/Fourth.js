
import React from "react";
const Array = () => {
  const branch = ["IT", "CSE", "AIML", "AIDS", "CS"];
  const branchlist = branch.map((branch)=><li >{branch}</li>);
  

  return (
    <div>
      <h1>List of branches</h1>
      <ul>{branchlist}</ul>
     </div>
  );
};
export default Array;
