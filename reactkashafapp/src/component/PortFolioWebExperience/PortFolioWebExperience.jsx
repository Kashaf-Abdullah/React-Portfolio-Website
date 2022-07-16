import React from 'react'
import PortFolioWebExperienceDiv from '../PortFolioWebExperienceDiv/PortFolioWebExperienceDiv';
import './PortFolioWebExperience.css'
const PortFolioWebExperience = () => {
  return (

  <>
<div className="experience" id='Experience'>
  <span className='expHeading'>EXPERIENCE</span>
  <div className="exp" style={{display:"flex" , gap:"50px" ,marginTop:"84px" ,justifyContent:"center", flexDirection:"row",flex:"Wrap"}}> 
   <PortFolioWebExperienceDiv exp="5+"  txt="Projects"/>
  <PortFolioWebExperienceDiv exp="1+"  txt=" Web developement"/>
   <PortFolioWebExperienceDiv exp="2+"  txt="Coding Experience"/>
<PortFolioWebExperienceDiv exp="1+"  txt="Freelancing Experience"/>
</div>


</div>
  </>
  )
}

export default PortFolioWebExperience