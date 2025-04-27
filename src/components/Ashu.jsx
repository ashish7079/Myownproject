import React from 'react'
// import images from "./images/coupleanime.jpg";

function Ashu() {
  return (
    <div id="ashi" className='h-full'>
      <div id="main" style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', color: 'pink' }}>
        <span id='suru' style={{marginTop: '5pc',fontSize : '40px',fontWeight : '700'}}>HEY THERE HII , THIS IS YOUR ABOUT PAGE ENJOY IT</span>


      </div>
      <div id="ashi3">
        <div id="ashi1"> <img src="./coupleanime.jpg" alt="about" /> </div>
        <div id="ashi2">Love is usually understood to be a powerful emotion involving an intense attachment to an object and a high evaluation of it.Love has been understood by many philosophers to be a source of great richness and energy in human life</div>
      </div>
      <div id="ashi6">
        <div id="ashi10">
      <div id="ashi5"> <img src="./alone boys.jpg" alt="about" /> </div>

        <div id="ashi4">Love is usually understood to be a powerful emotion involving an <span className='ml-[10pc]'>intense attachment to an object and <br /> </span>
        <span className='ml-[4pc]'> a high evaluation of it.Love has been understood by many</span> philosophers to be a source of great richness and energy in human
         life</div>
         </div>
      </div>

      <div id="vedio">
        <div id="vedio1"><video src="/videoplayback.mp4" autoPlay muted loop playsInline  /></div>
        <div id="vedio2">Love is usually understood to be a powerful emotion involving an intense attachment to an object and a high evaluation of it.Love has been understood by many philosophers to be a source of great richness and energy in human life.</div>
      </div>
    </div>
  )
}

export default Ashu