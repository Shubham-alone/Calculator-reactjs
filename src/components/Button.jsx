import React from "react";

function Button ({value,setValue}) {
  return(
  <>
     <div>
        <input type="button" value='AC' onClick={(event) => {
            setValue('')
        }} />
        <input type="button" value='DC' onClick={(event) => {
            setValue(value.slice(0, -1))
        }} />
        <input type="button" value='/' onClick={(event) => {
            setValue(value + event.target.value)
        }} />
        <input type="button" value='.' onClick={(event) => {
             setValue(value + event.target.value)
        }} />
     </div>

     <div>
        <input type="button" value='7' onClick={(event) => {
             setValue(value + event.target.value)
        }} />
        <input type="button" value='8' onClick={(event) => {
             setValue(value + event.target.value)
        }} />
        <input type="button" value='9' onClick={(event) => {
             setValue(value + event.target.value)
        }} />
        <input type="button" value='*' onClick={(event) => {
             setValue(value + event.target.value)
        }} />
     </div>

     <div>
         <input type="button" value='4' onClick={(event) => {
             setValue(value + event.target.value)
         }} />
         <input type="button" value='5'  onClick={(event) => {
             setValue(value + event.target.value)
         }}  />
         <input type="button" value='6'  onClick={(event) => {
             setValue(value + event.target.value)
         }}  />
         <input type="button" value='+'  onClick={(event) => {
             setValue(value + event.target.value)
         }}  />
     </div>

     <div>
         <input type="button" value='1'  onClick={(event) => {
             setValue(value + event.target.value)
         }}  />
         <input type="button" value='2'  onClick={(event) => {
             setValue(value + event.target.value)
         }}  />
         <input type="button" value='3'  onClick={(event) => {
             setValue(value + event.target.value)
         }}  />
         <input type="button" value='-'  onClick={(event) => {
             setValue(value + event.target.value)
         }}  />
     </div>

     <div>
       <input type="button" value='00'  onClick={(event) => {
             setValue(value + event.target.value)
         }}  />
       <input type="button" value='0'  onClick={(event) => {
             setValue(value + event.target.value)
         }}  />
       <input type="button" value='=' className="equal"  onClick={(event) => {
             setValue(eval(value))
         }}  />
     </div>
  </>
  )
};

export default Button;