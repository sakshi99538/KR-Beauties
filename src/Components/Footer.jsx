import React from 'react'
import logo from  '../Components/logo.svg'

function Footer() {
  return (
    <>
    <div className="ft1">
        <h2>Subscribe to our Email Address</h2>
        
            <input type="text" placeholder='Enter Your Email....' />
        <button>Subscribe</button>
    </div>
        <hr />
    <div className="ft2">

        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="l1">
            <ul>
                <li>Shop All</li>
                <li>Make Up</li>
                <li>Skin Care</li>
                <li>Hair Care</li>
                <li>About</li>
                <li> Contact</li>
            </ul>
            
        </div>
        <div className="l2">
            <ul>
                <li>Refund Policy</li>
                <li>Terms & Condition</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-icons">
        <i class="ri-instagram-fill"></i>
        <i class="ri-facebook-circle-fill"></i>
        <i class="ri-twitter-fill"></i>


        </div>
        
    </div>
    <div className="copyright">
        <p>Copyright © 2024 Be Bold | Powered by Be Bold</p>
    </div>
    
    
    
    
    </>
  )
}

export default Footer