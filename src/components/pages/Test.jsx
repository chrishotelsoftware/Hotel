import React from 'react'
import './Test.css';
import Footer from '../Footer'

import { BsFillPersonCheckFill } from "react-icons/bs";

const Test = () => {
  return (
    <div className='Testpg_main'>
    <div className='Testpg_intro'>
        <div className='txtt'>
        <p className='ti_1'>Happy Client's</p>
        <p className='ti_2'>Testimonals</p>
        <p className='ti_3'>Dont Take our Words !Hear what they say Aboutus..</p>
        </div>

    </div>
    <div className='all'>
     <p id="bg-text2">TESTIMONALS</p>
    <div className='Test_content'>
        <p className='t_t1'>---- Testimonals</p>
        <p className='t_t2'>What Our Clients Say</p>
        <p className='t_t3'>Sidx Interior Desgin is the best for make your dream place....</p>
    </div>
    <div className='feedback'>
    <div className='fed'>
        <p className='t_m'>“You are the consummate professional and I am in awe of your design abilities and seamless coordination skills. I absolutely adore my new space and I am forever grateful to you and your team. Every person you recommended produced an impeccable product and every person was a pleasure to work with.”</p>
        <p className='t_name'><BsFillPersonCheckFill/>Naseer</p>
    </div>
    <div className='fed'>
        <p className='t_m'>“You are the consummate professional and I am in awe of your design abilities and seamless coordination skills. I absolutely adore my new space and I am forever grateful to you and your team. Every person you recommended produced an impeccable product and every person was a pleasure to work with.”</p>
        <p className='t_name'><BsFillPersonCheckFill/>Sidharth</p>
    </div>
    <div className='fed'>
        <p className='t_m'>“You are the consummate professional and I am in awe of your design abilities and seamless coordination skills. I absolutely adore my new space and I am forever grateful to you and your team.” </p>
        <p className='t_name'><BsFillPersonCheckFill/>        Shyam</p>
    </div>
    </div>
    <div className='feedback'>
    <div className='fed'>
        <p className='t_m'>“You are the consummate professional and I am in awe of your design abilities and seamless coordination skills. I absolutely adore my new space and I am forever grateful to you and your team. Every person you recommended produced an impeccable product and every person was a pleasure to work with.”</p>
        <p className='t_name'><BsFillPersonCheckFill/>Naseer</p>
    </div>
    <div className='fed'>
        <p className='t_m'>“You are the consummate professional and I am in awe of your design abilities and seamless coordination skills. I absolutely adore my new space and I am forever grateful to you and your team. Every person you recommended produced an impeccable product and every person was a pleasure to work with.”</p>
        <p className='t_name'><BsFillPersonCheckFill/>Sidharth</p>
    </div>
    <div className='fed'>
        <p className='t_m'>“You are the consummate professional and I am in awe of your design abilities and seamless coordination skills. I absolutely adore my new space and I am forever grateful to you and your team.” </p>
        <p className='t_name'><BsFillPersonCheckFill/>        Shyam</p>
    </div>
    </div>
    </div>
    <Footer/>
   
    </div>
  )
}

export default Test