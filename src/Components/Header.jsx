import React from 'react'
import logo from  '../Components/logo.svg'
import 'remixicon/fonts/remixicon.css'
import { Link } from 'react-router-dom'
function Header() {

  return (
    <>
    <div className="header">
        <div className="image">
           <Link id='links' to="/"> <img src={logo} alt="" /></Link>
        </div>
        <div className="navbar">
            <ul>
                <li><Link id='links' to='/'>Shop All</Link></li>
                <li><Link id='links' to='/page2'>Make Up</Link></li>
                <li><Link id='links' to='/page3'>Skin Care</Link></li>
                <li><Link id='links' to='/page4'>Hair Care</Link></li>
                <li><Link id='links' to='/page5'>About</Link></li>
                <li><Link id='links' to='/page6'>Contact</Link></li>
            </ul>
        </div>
        <div className="icons">
        <i className="ri-user-fill"></i>
        <i className="ri-shopping-cart-fill"></i>
        <div className="item">0</div>
        </div>

    </div>
    {/* Section1 */}
    {/* <div className="shop">
        
        <h1>
            <span class="shp">Home/Shop</span> <br />Shop</h1>
    </div>
 */}

    
    </>
  )
}

export default Header