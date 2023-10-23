import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import NumForm from './Components/NumForm'
import About from './Components/About';
import {useState} from 'react'

import{
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"



function App() {
  const [mode, setMode] = useState("dark");
  const [modeText, setModeText] = useState("light");
  const [mode2Text, setMode2Text] = useState("dark");

  const enableDarkMode = ()=>{

    if(mode === "light")
    {
      document.getElementById("problem2").style.color = "black"
      document.getElementById("problem").style.color = "black"
      setMode("dark");
      setModeText("light");
      setMode2Text("dark");
      document.body.style.backgroundColor = "white"
    }
    else
    {
      setMode("light");
      setMode2Text("light");
      setModeText("dark");
      document.body.style.backgroundColor = "#212529"
      document.getElementById("problem2").style.color = "white"
      document.getElementById("problem").style.color = "white"
      document.getElementById("for_border").style.border = "2px solid black"
    }
  }

  return (
     <>
     <Navbar title = "Text-Utils" enableDarkMode = {enableDarkMode} mode = {mode} mode2Text = {mode2Text} modeText = {modeText} />
     <div className="container" >
     <Router>
     <Routes>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/' element={<TextForm heading = "Analyze Your Text with Text-Utils"/>} />
        <Route exact path='/NumForm' element = {<NumForm heading = "Analyze Your Number with Num-Utils"/>}/>
     </Routes>
     </Router>
     
     </div>
     </>
  );
}

export default App;
