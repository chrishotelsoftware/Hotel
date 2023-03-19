import React from 'react';
//import '../../App.css';
import './Contactus.css';
import Msg from '../Msg';
import Footer from '../Footer';
// import { GoogleMap } from 'react-google-maps';

export default function Contactus() {
  return (
    <div>
      <div className='Contactpg_main'>
        <div className='Contactpg_intro'>
            <p className='c_1'>Get in Touch</p>
            <p className='c_2'>Contact Us</p>
            <p className='c_3'>We Love to Hear from You!</p>
        </div >
        <Msg/>
       
        </div>
        <div>
        <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60912.80068982936!2d78.51658445820316!3d17.409385900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9ec06878dd3d%3A0xd7b75419c660a722!2sSiddhartha%20Public%20School!5e0!3m2!1sen!2sin!4v1664708854657!5m2!1sen!2sin" 
    width="600"
    height="450"
    allowFullScreen=""
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    >
    </iframe>
        </div>
        <Footer/>

    </div>
   
  )
}
