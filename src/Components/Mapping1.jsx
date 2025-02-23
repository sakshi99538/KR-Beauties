import React from 'react'

import img1 from  '../assets/Image/Image1.png'
import img2 from  '../assets/Image/Image2.png'
import img3 from  '../assets/Image/Image3.png'
import img4 from  '../assets/Image/Image4.png'
import img5 from  '../assets/Image/Image5.png'
import img6 from  '../assets/Image/Image6.png'
import img7 from  '../assets/Image/Image7.png'
import img8 from  '../assets/Image/Image8.png'

function Mapping1() {


    
const Product =[{
    pic: img1,
    name:"",
    price:""
},{
    pic: img2,
     name:"",
    price:""
},{
    pic:img3,
     name:"",
    price:""
},{
    pic:img4,
     name:"",
    price:""
},{
    pic:img5,
     name:"",
    price:""
},{
    pic:img6,
     name:"",
    price:""
},{
    pic:img7,
     name:"",
    price:""
},{
    pic:img8,
     name:"",
    price:""
}]
const list =Product.map(post=>
    <div className="card">
    <button> Sale</button>
    <img src={post.pic} alt="" />
    <div className="icons-1">
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
    <i class="ri-star-half-fill"></i>
    </div>
    <div className="productName">
        <h2>{post.name}</h2>
    </div>
    <div className="price">
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

export default Mapping1