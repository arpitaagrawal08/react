import  React  from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
function Myapp(){
  return(
    <div>
      <h1>Custom app</h1>
    </div>
    //aise syntax ki puri parsing hoti h, as react cant understand html, thats why we use jsx, ie html mixed in JS

  )
}
//ab what if hum html ki jagah directly hi ek react element bna le?
// const ReactElement={
// type:'a',
// props:{
//     href:'https://google.com',
//     target:'_blank',
// },
// children:'CLick to visit googlu'
// }
//we can use a react element directly

const another=(
  <a href="https://google.com" target='_blank'>Visit google</a>
)
//bahar k variable ko directly react element me use kr skte hai
const example='yo yo honey singh'

//remember this synatx for react element creation!!
const ReactElement=React.createElement(
  //isme syntax pre-defined hota hai
  'a',
  {href:'https://google.com',target:'_blank'},
  'click to visit google',
  example
  //isme bhi if-else wagera nhi kr skte->think na, object k andar kuch bhi krte rhoge kya!
//fibre algorithm me keys use krne se lists ki performane badhti hai
);
createRoot(document.getElementById('root')).render(
  
  //  <>
  //   <App />
  //   <Myapp/>
    
  //   </> 
    // ReactElement-> ye nhi chlega aise hi?
    //another 
    ReactElement
 
)
