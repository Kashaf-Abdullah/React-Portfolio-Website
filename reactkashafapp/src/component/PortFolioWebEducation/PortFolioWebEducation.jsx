import React from 'react'
import './PortFolioWebEducation.css'


import web1 from  "../../img/web1.JPG";

import web2 from  "../../img/web2.JPG";
import web3 from  "../../img/web3.JPG";

import java2 from  "../../img/java1.JPG";
import PhpTravel from "../../img/PhpTravelWeb.JPG";
import PhpShoopingWeb from "../../img/Phpweb.JPG";
import ReactWeb from "../../img/ReactWeb.JPG";

//we are using here swiper library
//npm add swiper
import 'swiper/css';
import {Swiper,SwiperSlide} from 'swiper/react';



const PortFolioWebEducation = () => {
  return (
<div className="education" id='Projects'>
<span>RECENT PROJECTS</span>
<span>ACADEMIC</span>

{/* slider */}
<Swiper spaceBetween={10} 
slidesPerView={3}
gradCursor={true}
className='portfolio-slider'>
  <SwiperSlide>
   <img src={java2} /> 
  </SwiperSlide>
 
  <SwiperSlide>
  <img src={web1} /> 
  </SwiperSlide>
  <SwiperSlide>
  <img src={web2} /> 
  </SwiperSlide>
  <SwiperSlide>
  <img src={PhpTravel}/> 
  </SwiperSlide>
  <SwiperSlide>
  <img src={PhpShoopingWeb}/> 
  </SwiperSlide>
  <SwiperSlide>
  <img src={ReactWeb} /> 
  </SwiperSlide>
  <SwiperSlide>
  <img src={web3} /> 
  </SwiperSlide>
  
</Swiper>

</div>
  )
}

export default PortFolioWebEducation