import React from 'react'
import img26 from  '../assets/Image/Image26.png'
import img27 from  '../assets/Image/Image27.png'
import img28 from  '../assets/Image/Image28.png'
import img29 from  '../assets/Image/Image29.png'

function Mapping4() {

const Product =[{
   pic:img26,
   name:"",
   price:""
},{
   pic:img27,
   name:"",
   price:""
},{
   pic:img28,
   name:"",
   price:""
},{
   pic:img29,
   name:"",
   price:""
}]
 const list =Product.map(post=>
    <div className="card4">
        <button> Sale</button>
        <img src={post.pic} alt="" />
        <div className="icons-1">
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-half-fill"></i>
        </div>
        <div className="productName1">
            <h2>{post.name}</h2>
        </div>
        <div className="price1">
            Rs. <span>
                500
            </span>  
            450
        </div>
        <div className="buttons">
        <button className="add-to-cart" >Add to Cart</button>
        <button className="buy-now">Buy Now</button>
    </div>

    </div>
 )

  return (
    <>
    {list}
    
    </>
  )
}

export default Mapping4