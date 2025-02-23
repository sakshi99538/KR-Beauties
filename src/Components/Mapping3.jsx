import React from 'react'
import img22 from  '../assets/Image/Image22.png'
import img23 from  '../assets/Image/Image23.png'
import img24 from  '../assets/Image/Image24.png'
import img25 from  '../assets/Image/Image25.png'

function Mapping3() {

const Product =[{
   pic:img22,
   name:"",
   price:""
},{
   pic:img23,
   name:"",
   price:""
},{
   pic:img25,
   name:"",
   price:""
}
,{
    pic:img24,
    name:"",
    price:"" 
}]
 const list =Product.map(post=>
    <div className="card3">
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

export default Mapping3