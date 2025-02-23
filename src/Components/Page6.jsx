import React from 'react'
import Image4 from '../assets/Image/Image16.svg'

import { useRef, useState } from 'react'

function Page6() {
    const refElement =useRef({
        firstname: '',
        lastname: '',
        email: '' ,
    });
    

    const[name,setName] =useState("Sakshi")
    
    const[lastname,setlastName] =useState("Sakshi")
    const[email,setemail] =useState("email")
    console.log(refElement)

    function Reset  () {
      setName("")
      setlastName("")
      setemail("")
    
      refElement.current.focus()
    }
   
  return (
<>
<div className="contact">
    <div className="contactbanner">
        <img src={Image4} alt="" />
        
    </div>
    <div className="contactdetails">
<div className="details1">
    <h1>Contact Us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Ut id leo tempor, congue <br />justo at, lobortis orci.</p>
    <div className="contacticons">
        <ul>
        <li><i class="ri-map-pin-fill"></i>
        123 Fifth Avenue,New York,NY1060</li>
        <li><i class="ri-message-2-fill"></i>Contactinfo@.com</li>
        <li><i class="ri-customer-service-fill"></i>888996645</li>
        </ul>
    </div>
</div>
<div className="details2">

 
    <h3>Name</h3>
    <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)}placeholder='firstname' />

    <input  ref={refElement} type="text" value={lastname} onChange={(e)=>setlastName(e.target.value)}placeholder='lastname' />

    <h3>Email</h3>
    <input ref={refElement} type="email"  value={email}onChange={(e)=>setemail(e.target.value)} placeholder='email'/>
    <div className="msg">
    <h3>Message</h3>
    <input  className="msg" type="Message" placeholder='message' />
    </div>
    <br />
   <div className="btn">
   <button>Send</button>
   <button onClick={Reset}> Reset </button>
   </div>
</div>

    </div>
    </div>
    
    
    </>
  )
}

export default Page6