import { useState } from 'react'

import './App.css'

function App() {
  //idher let lena hota hai
let [counter,setCounter]=useState(15)
//jo usestate hota hai wo ek batches me bhejta hai, so even if we do setcounter 5 times, value still ek ek krke hi badhegi

 // let counter=15
const addValue=()=>{
  
  // counter++
  console.log("value added",counter);
  //aise krne se UI to update to hori hi nhi h..
//UI to react khud control krta hai, wo hmare haath me nhi h
//therefore use hooks->har hook ka khud ka kaam hai
//use state,use effect,use context,use ref

//ye variable h-> jo hmne uper liya tha, not a default thingy
setCounter(counter+1)
setCounter(counter+1)
setCounter(counter+1)
setCounter(counter+1)

//ye charo ka ek batch ban jaega, and ek saath hi hoga, thus 1-1 in increment hoga
//we can do like->
setCounter((prev)=>prev+1)
setCounter((prev)=>prev+1)
setCounter((prev)=>prev+1)
setCounter((prev)=>prev+1)
//ab ek saath 19 answer aaega!!


}
const removeVal=()=>{

setCounter(counter-1)
console.log("value removed",counter);

}
  return (
    <>
      <h1>counter project</h1>
     <h2>value:{counter}</h2>
     <button onClick={addValue}
     >Add value</button>
     <br />
     <button onClick={removeVal}
     >Remove val</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
