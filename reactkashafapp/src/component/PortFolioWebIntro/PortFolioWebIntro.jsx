import { Button } from '@chakra-ui/react'
import React from 'react'
import './PortFolioWebIntro.css';
import SchoolPic from '../../img/introimage2.png';

import Vector1 from '../../img/Vector1.png';

import Vector2 from '../../img/Vector2.png';
import Crown from '../../img/crown.png';

import PortFolioFloatingDiv from '../PortFolioFloatingDiv/PortFolioFloatingDiv';

import resume from './Kashaf CV.pdf';
import {motion} from 'framer-motion';
const PortFolioWebIntro = () => {
  const transition={duration:16 , type:'spring'}

  return (
  <div className="intro">
    <div className="leftside">
        
        <span>Hello I am</span>
        <span style={{fontFamily:"Splash"}}>KASHAF ABDULLAH</span>
        <span>Allrounder web developer.I am a programmer with good knowledge of front-end and backend techniques</span>
        


        
        <div className="introbtn">
        <a href={resume}>
      <button className='btnintro'>Download CV</button>
</a>
</div>




    </div>

<div className="rightside">
  
  {/* <img src={Vector1}/>
  <img src={Vector2}/> */}
  <motion.img
  initial={{left:'-26%'}}
  whileInView={{left:'-14%'}}
  transition={{transition}}
  src={SchoolPic}/>
 
</div>

  </div>
  )
}

export default PortFolioWebIntro