import React from 'react'
import './PortFolio.css';

import HOC from  "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";


import 'swiper/css';
//we are using here swiper library
//npm add swiper
import {Swiper,SwiperSlide} from 'swiper/react';


const PortFolio = () => {
  return (
    <div className="portfolio">
{/* heading */}
<span>Recent Projects</span>
<span>PortFolio</span>


{/* slider */}
{/* these space between, slideperview,gradcursor are slider parameter */}
<Swiper
 spaceBetween={30} 
slidesPerView={3}
gradCursor={true}
className='portfolio-slider'
>
    <SwiperSlide>
<img src={Sidebar} alt=""/>
</SwiperSlide>


<SwiperSlide>
<img src={Ecommerce} alt=""/>
</SwiperSlide>



<SwiperSlide>
<img src={MusicApp} alt=""/>
</SwiperSlide>


<SwiperSlide>
<img src={HOC} alt=""/>
</SwiperSlide>

</Swiper>
    </div>
  )
}

export default PortFolio;