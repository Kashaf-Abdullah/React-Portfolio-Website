import React from 'react'

import './PortFolioFloatingDiv.css';
const PortFolioFloatingDiv = ({image,txt}) => {
  return (
    <div className='floatingdiv' style={{background:"pink"}}>
        <img src={image} alt="img her"  />
        <span>{txt}</span>
    </div>
  )
}

export default PortFolioFloatingDiv