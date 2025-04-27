import { useState } from "react"
import './App.css'
import { BrowserRouter as Router , Routes ,Route ,Link } from "react-router-dom";
import Login from "./components/Login";
import Ashu from "./components/Ashu";
import Asu from "./components/Asu";
import Niche from "./components/Niche";
import Set from "./components/set";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <div id="parent1">
        <div id="parent3">
        <div id="parent2">
        <nav>
         <span id="love" style={{fontWeight : 'bold', fontSize: '25px'}}>Love</span>
        <span id="abou" className="ml-[5pc]" style={{fontWeight : 'bold', fontSize: '25px'}}> <Link to= "/">About </Link></span>
         <span id="cont" className="ml-[5pc]"style={{fontWeight : 'bold', fontSize: '25px'}}> <Link to= "/Asu">Contact Us</Link></span>
         <button id="login10" className="ml-[35pc] mt-[5px]" style={{backgroundColor:'blue',color:'whitesmoke',fontWeight : '500', fontSize: '25px', borderRadius:'8px',paddingLeft:'10px',paddingRight:'10px'}}><Link to= "/login">Login</Link></button>
         <input className='bg-white text-black ml-[60px]' type="search" name="enter" id="anything" placeholder="  search"/>

        </nav>
        </div>
        </div>
        <Routes>
          <Route path="/" element = {<Set/>}/>
          <Route path="/Asu" element = {<Asu/>}/>
          <Route path="/login" element = {<Login/>}/>
        </Routes>
      </div>
      </Router>
   
    </>
  )
}

export default App
