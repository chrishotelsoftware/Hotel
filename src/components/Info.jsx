import React from 'react'
import'./info.css'
import { Button } from './Button';

const Info = () => {
  return (
    <div className='cont'>
    <div className='box1'>
   
    <h1>- BUSSINESS CLASS HOTEL</h1>
    
    <img src='/images/img10.jpg'></img>
    </div>
    
  
  <div className='box2'>
      <p>Chris Hotels is situated in Whitefield, Bangalore. Our luxury hotel has a unique feature-our affordable price. Chris Hotel is designed keeping in mind the needs of corporate guests who flock to Bangalore for short duration and long duration business stays. Beautifully designed interiors bring alive contemporary richness providing our distinguish guests, Value for Luxury</p>
      <div className='hero-btns'>
      <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
      >
        Book Now
      </Button>
      </div>
      </div>
   
    

  </div>
  )
}

export default Info