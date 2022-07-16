import React from 'react'
import './PortFolioSkills.css'
import {Pagination} from 'swiper';
import { FaBootstrap, FaCss3, FaHtml5, FaJava, FaJs, FaNode, FaPhp, FaReact } from "react-icons/fa";


import 'swiper/css/pagination';
import 'swiper/css';

import {Swiper,SwiperSlide} from 'swiper/react';

const PortFolioSkills = () => {
//array of clients

const clients=[
    {
      img:FaHtml5,
      review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error quidem atque maxime ea qui, amet nihil doloribus, ullam officiis nobis repudiandae?",
      heading:"HTML"
    },
  
  
    {
      img:FaCss3,
      review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error quidem atque maxime ea qui, amet nihil doloribus, ullam officiis nobis repudiandae?",
      heading:"CSS"
    },
  
    {
      img:FaJs,
      review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error quidem atque maxime ea qui, amet nihil doloribus, ullam officiis nobis repudiandae?",
      heading:"Javascipt"
    },
  
    {
      img:FaNode,
      review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error quidem atque maxime ea qui, amet nihil doloribus, ullam officiis nobis repudiandae?",
      heading:"NodeJS"
    },
    {
        img:FaPhp,
        review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error quidem atque maxime ea qui, amet nihil doloribus, ullam officiis nobis repudiandae?",
        heading:"PHP"
      },
      {
        img:FaReact,
        review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error quidem atque maxime ea qui, amet nihil doloribus, ullam officiis nobis repudiandae?",
        heading:"ReactJS"
      },{
      img:FaBootstrap,
        review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error quidem atque maxime ea qui, amet nihil doloribus, ullam officiis nobis repudiandae?",
        heading:"BootStrap"
      },{
      img:FaJava,
        review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error quidem atque maxime ea qui, amet nihil doloribus, ullam officiis nobis repudiandae?",
        heading:"Java"
      }
      

  ]
  

    return (

<div className="t-wrapper" id="Skills">
     
        <div className="t-heading">
      
<span>My Skills</span>
<span>Experience Designer focus on the quality of the user experience and culturely relevants solutions.</span>
<span>Enthausiastic and interesting in I.T .I recently began to be fascinating by web programming.</span>

</div>

 {/* slider */}

<Swiper  modules={[Pagination]}

slidesPerView={1}
pagination={{clickable:true}}
>
  {
    clients.map((client,index)=>{
      return (
      <SwiperSlide key={index}>
<div className="testimonials">
 <client.img size="100px" />
 <span>{client.heading}</span>

  <span>{client.review}</span>
</div>
      </SwiperSlide>
    );
    })
  };


</Swiper>      
    </div>
    
  )
}

export default PortFolioSkills