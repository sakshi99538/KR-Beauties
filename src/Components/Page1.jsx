import React from 'react'
import banner from  '../assets/Image/banner.jpg'
import Mapping1 from './Mapping1'


function Page1() {
  return (
    <>
    <div className="banner">
        <img src={banner} alt="" />
    </div>
    <div className="pro">
    <div className="shop">
        
        <h1>
            <span class="shp">Home/Shop</span> <br />Shop</h1>
    </div>
    {/* <div className="card">
        <button> Sale</button>
        <img src={Image} alt="" />
        <div className="icons-1">
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-half-fill"></i>
        </div>
        <div className="productName">
            <h2>Hair Serum</h2>
        </div>
        <div className="price">
            Rs. <span>
                500
            </span>  
            450
        </div>


    </div> */}
    <Mapping1/>
    </div>
    

    
    
    </>
  )
}

export default Page1