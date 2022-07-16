import React from 'react'
import './PortFolioWork.css'
import WorkFloatingDiv from '../WorkFloatingDiv/WorkFloatingDiv.jsx'
import { FaBootstrap,  FaFacebook, FaHtml5, FaJava, FaJs, FaNode, FaPhp, FaReact,FaFiver,FaDribbble,FaLinkedin, FaTwitter, FaWalking, FaWhatsapp } from "react-icons/fa";
import { DiCodeignitor, DiAndroid, DiWebplatform, DiBootstrap, DiWordpress, DiDreamweaver, DiReact, DiGithub } from 'react-icons/di';
import Upwork from "../../img/Upwork.png";
import Fiver from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import LinkedIn from "../../img/LinkedIn.png";
import Facebook from "../../img/Facebook.png";

import {motion} from 'framer-motion';//npm add framer-motion

const PortFolioWork = () => {
  return (
    <div className='works' id='Services'>
        <div className="w-left">
        <span>How to Contact me</span>
        <span>For Your website developement</span>
        <span>LinkedIn. FIVERR. UPWORK</span>
<div className="mywork" >

<WorkFloatingDiv  image={LinkedIn} />
<WorkFloatingDiv  image={Fiver} />

<WorkFloatingDiv  image={Upwork}/>
</div>
        </div>



     {/* rightside */}
     <center></center>
      <div className="w-right">
    <motion.div 
     initial={{rotate:360}}
     whileInView={{rotate:0}}
     viewport={{margin:'-40px'}}
     transition={{duration:99.5,type:'spring'}}
     
    className="w-mainCircle">
{/* <div className="w-secCircle">
<FaFacebook/>
</div> */}


<div className="w-secCircle">
<FaDribbble size="42px"/>
</div>



<div className="w-secCircle">
<FaLinkedin size="42px"/>
</div>


<div className="w-secCircle">
<FaWhatsapp size="42px"/>
</div>


<div className="w-secCircle">
<DiGithub size="42px"/>
</div>



<div className="w-secCircle">
<FaFacebook size="42px"/>
</div>
    </motion.div>

{/* background circle */}
<div className="w-blueCircle"></div>
<div className="w-backCircle  yellowCircle"></div>
<div className="w-backCircle  yellowCircle2"></div>





      </div>
<center/>
    </div>
  )
}

export default PortFolioWork
