import React from "react";

function Display ({value}) {
  return(
    <>
       <div className="display">
          <input type="text" readOnly value={value}  /> 
       </div>
    </>
  )
};

export default Display;