
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'

function App() {
const [themeMode,settheme]=useState('light')
const lightTheme=()=>{
  settheme("light")
}
const darkTheme=()=>{
  settheme("dark")
}
//actual change in a theme me js hi use hoti
useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)

},[themeMode])

  return (
    <>
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
      
    </>
  )
}

export default App
