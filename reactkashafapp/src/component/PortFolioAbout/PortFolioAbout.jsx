import React from 'react'
import  './PortFolioAbout.css';
import About from  "../../img/Aboutpic2.jpg";
import { FaGithub } from 'react-icons/fa';


const PortFolioAbout = () => {
  return (
    <div className='about' id='About'>

        <div className="a-left">
            <div className="aboutpara">
            <span>About ME</span>
            <span>I am undergraduate Software Engineer .I am obsessed with making things and even more obsessed with making things better .I am actively working in the web designing and also learning backened development. I have designed rich,user-friendly interfaces for web projects of all sizes.I enjoy creating things that focus on usefulness and elegance  </span>
            <a href='https://github.com/Kashaf-Abdullah'>
            <button className='button '><FaGithub size="25px"/></button>
</a>
</div>
        </div>

{/* <div className="a-right">
    <img src={About}/>

</div>
         */}
    </div>
  )
}

export default PortFolioAbout