import React, { useState } from 'react'

function Login() {
  const [value,setvalue] = useState("");
const [result,setresult] = useState("");
function handlesubmit(e) {
  e.preventDefault(),
  setresult (
    alert (`Your form has been submitted`)
  );
}
function handleChange(e){
  setvalue(e.target.value);
  setresult("");
}

  return (
    <>
    <div id="login2"style={{height:'35pc',backgroundColor:'grey',marginTop:'3pc',width:'40%',marginLeft:'90px',flexDirection:'column',display:'flex'}}>
    <div id="login">
      <div id="login1">
        <div id="login7" style={{marginLeft:'10pc',color:'blue',fontSize:'2pc',fontWeight:'500'}}>Login Form</div>
        <form onSubmit={handlesubmit} action="/submit" method="post">
        <input className='mt-[3pc] ml-[10pc] bg-white text-black' type="text" name="name" id='login'onInput={handleChange} placeholder='Enter your name' required/>
          <div id="login3">

      <input className='mt-[40px] ml-[10pc] bg-white text-black' type="email" name="email" id="email" onInput={handleChange}  placeholder='Enter your email'required/></div>
<div id="login4">
      <input className='mt-[40px] ml-[10pc] bg-white text-black' type="number" name="number" onInput={handleChange} placeholder='Enter your mobile number' required /></div>

      <div id="login5"><input className='mt-[40px] ml-[10pc] bg-white text-black' type="password" onInput={handleChange} name="password" id="password" placeholder='enter your password' required/></div>

      <div id="login6"><input className='mt-[40px] ml-[10pc] bg-white text-black' type="password"onInput={handleChange}  name="password" id="password" placeholder='enter your confirm password'required /></div>
      <div id="login8"><button type='submit' style={{backgroundColor:'green',marginLeft : '14pc', marginTop: '40px',borderRadius:'5px',fontSize:'20px',fontWeight:'400'}}>Submit</button></div>
      </form>
      <h4>{result}</h4>
      </div>

    </div>
     </div>
    </>
  )
}

export default Login