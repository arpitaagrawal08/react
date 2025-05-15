import { useState } from 'react'

import './App.css'

function App() {
  //idher let lena hota hai
let [counter,setCounter]=useState(15)

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
