import React from 'react'
import Image from '..//assets/Image/Image14.png'
import Image5 from '../assets/Image/Image17.jpg'
import Image6 from '../assets/Image/Image18.jpg'
import Image7 from '../assets/Image/Image19.jpg'
import Image8 from '../assets/Image/Image20.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

import Image3 from '../assets/Image/Image15.svg'
// import { EffectCoverflow, Pagination } from 'swiper/modules';
function Page5() {
  return (
    <>
      <div className="about">

        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src={Image5} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Image6} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Image7} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Image8} alt="" /></SwiperSlide>
          
        </Swiper>

      </div>
      <div className="mid">
        <div className="mid1">
          <h1>Lorem ipsum dolor sit <br>
          </br> amet, consectetur<br>
            </br> adipiscing elit.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="mid2">
          <h2>Cras ut ultricies risus. Etiam ac malesuada lectus. Sed congue nisi vitae lorem ullamcorper laoreet. In eget tellus mauris. Phasellus id ligula.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eget enim eget tincidunt. In finibus nisi ex, eu interdum urna euismod sit amet. Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit amet bibendum nibh consectetur quis. Curabitur tortor dolor, fringilla eu fringilla id, dignissim in urna. </p>
          <br />
          <br />
          <p>Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit amet bibendum nibh consectetur quis. Curabitur tortor dolor, fringilla eu fringilla id.</p>

        </div>
      </div>
      <div className="about-section">
        <img src={Image3} alt="" />
      </div>
      <div className="about-me">
        <div className="about-me1">
          <img src={Image}
            alt="" />
        </div>
        <div className="about-me2">

          <h2>Hii ,I am Sakshi ,<br />am 22 years old .I am an Enterprenaur.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eget enim eget tincidunt. In finibus nisi ex, eu interdum urna euismod sit amet. Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit amet bibendum nibh consectetur quis. Curabitur tortor dolor, fringilla eu fringilla id, dignissim in urna. </p>
          <br />
          <br />
          <p>Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit amet bibendum nibh consectetur quis. Curabitur tortor dolor, fringilla eu fringilla id.</p>

        </div>

      </div>
      <h1 className='why'>why choose us</h1>

      <div className="aboutfooter">
        <div className="div1">
          <h3>Free Shipping</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum necessitatibus, quam dolore sunt accusantium nulla! Iure debitis dolorum non similique maxime ad, officia fuga iusto!</p>
        </div>
        <div className="div1">
          <h3>Fast Delivery</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat similique assumenda facere itaque cum, doloremque repudiandae! Culpa consequatur tempora minima id vero sunt voluptatum ipsam!</p>
        </div>
        <div className="div1">
          <h3>Easy Returns</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sequi pariatur consequatur maiores nulla repudiandae molestiae, beatae inventore voluptate exercitationem, nam atque   </p>
        </div>

      </div>







    </>
  )
}

export default Page5