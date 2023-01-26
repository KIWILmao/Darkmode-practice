import React from 'react'
import Grid from './Grid'
export default function App() {
    const [darkMode ,setDarkMode] = React.useState(false)
    function toggle(){
        setDarkMode(prevDarkMode => !prevDarkMode)
    }
  return (
    <header className={darkMode ? "dark" : ""}>
        <Grid toggleDarkMode={toggle} darkMode={darkMode}/>
    </header>
  )
}