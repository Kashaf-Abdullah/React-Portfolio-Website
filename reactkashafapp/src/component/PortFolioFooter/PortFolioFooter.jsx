import React from 'react'


import './PortFolioFooter.css'

import Wave from '../../img/wave.png';


import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';

const PortFolioFooter = () => {
  return (
    <div className="footer">
    <img src={Wave} alt="" style={{width:'100%'}}/>
 
 <div className="f-content">

    {/* use library for ucon 
    search react unicons icon on google */}

{/* 
npm add @iconscout/react-unicons */}


<span>kashafabdullah@gmail.com</span>
<div className="f-icons">
    <Insta color='White' size='3rem'/>
    <Facebook color='White' size='3rem'/>
    <Github color='White' size='3rem'/>

</div>

 </div>
 </div>
    )
}

export default PortFolioFooter