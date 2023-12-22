import { useState } from 'react'
import './App.css'
import logo from "./assets/instagram.png"

function App() {
  const [login,setlogin] = useState(true);

  const loginSwitch = () =>{
    setlogin(!login)
  }

  return (
    <div className='Contener'>
      <div id='user'>
        <img src={logo} alt="" />
        <input type="text" hidden={login} name="" placeholder='Mobile Number or Email' id=""/>
        <input type="text" hidden={login} name="" placeholder='Full Name' id=""/>
        <input type="text" name="" placeholder='Phone number, userbane or email' id=""/>
        <input type="text" name="" id="" placeholder='Password' />
        <button>{login?"Sign in":"Sign up"}</button>
          <div id='footer'>
            {login?"Don't have account?":"have an account?"} <span onClick={loginSwitch}>{login?"Sign up":"Log in"}</span>
          </div>
      </div>

    </div>
  )
}

export default App
