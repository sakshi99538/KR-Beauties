import React from 'react'
import img9 from  '../assets/Image/Image9.png'
import img10 from  '../assets/Image/Image10.png'
import img11 from  '../assets/Image/Image11.png'
import img12 from  '../assets/Image/Image12.png'

function Mapping2() {

const Product =[{
   pic:img9,
   name:"",
   price:""
},{
   pic:img10,
   name:"",
   price:""
},{
   pic:img11,
   name:"",
   price:""
},{
   pic:img12,
   name:"",
   price:""
}]
 const list =Product.map(post=>
    <div className="card1">
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

export default Mapping2