import React,{useState} from 'react'
import {useRef} from "react"
import './PortFolioContactForm.css'
import emailjs from '@emailjs/browser';
const PortFolioContactForm = () => {


  const form = useRef();
  const [done,setDone]=useState(false);

const sendEmail = (e) => {
e.preventDefault();

emailjs.sendForm('kashaf01', 'template_kb50kuw', form.current, 'I_VQHoH4MPQYZQhyL')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
};

  return (
   <div className="contactform" id='Contact'>
<div className="c-left">
    <span>Just Say Hello !</span>
    <span>Lorem ipsum dolor sit.</span>
    <form  ref={form} onSubmit={sendEmail}>
        <div className="contactname">

        <input type="text" id="fname" name="fname"placeholder='FIRSTNAME' />
        <input type="text" id="lname" name="lname"placeholder='LASTNAME'/>
        </div>
        <div className="contactinfo">
        <input type="email" id="mail" name="mail" placeholder='EMAIL'/>
        <input type="number" id="phoneNo" name="phoneNo"placeholder='PHONE NUMBER'/>
        </div>
      <div className="contactmsg">
        <textarea placeholder='MESSAGE' id="message" name="message" rows="3" cols="30"></textarea>
        </div>
        <div className="button contactbtn">
<button type="submit">SUBMIT</button>
<span>{done  && "Thanks for connecting"}</span>
</div>
    </form>
 </div>



<div className="c-right">
    <div className="aboutinfo">
    <span>GET IN TOUCH</span>
    
    <span>Happy to answer any question you have to provide you with estimate.</span>
     
     <span>Just Send us a message in the form with any question you may have</span>
     <span>We would love to be in touch with you </span>
    
     <span>THANKYOU!!</span>
</div>


</div>
   </div>
  )
}

export default PortFolioContactForm