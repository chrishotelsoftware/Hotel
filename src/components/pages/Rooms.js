import React from 'react';
import './Room.css';
import Footer from '../Footer'
import { Button } from '../Button';
import Wel from '../Wel';
import Services from '../Services';


import Carousel from 'react-bootstrap/Carousel';

function Rooms() {
  return (
    <>
    <div className='room_main'>
      <p> EXCLUSIVE ENVIROMENT</p>
      <h1> DISCOVER OUR ROOMS AND SUITES </h1>

    </div>
    <Wel/>
    <div className='rooms'>
      <div className='room1'>
        <h1> DELUXE KING  ROOM</h1>
    <p> Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed.<br/><br/> Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. </p>
      <button> BOOK NOW FROM 2,165</button>
      </div>
    <div className='room1'>
    <Carousel slide={false}>
  
      <Carousel.Item>
     
        <img
          className="d-block w-100"
          src="/images/img1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>CHRIS HOTEL</h3>
          <p>A BUSSINESS CLASS HOTEL</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/img2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>CHRIS HOTEL</h3>
          <p>A BUSSINESS CLASS HOTEL</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/img3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>CHRIS HOTEL</h3>
          <p>A BUSSINESS CLASS HOTEL :</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
    </div>
    <Services />
    <div className='rooms'>
     
    <div className='room1'>
    <Carousel slide={false}>
  
      <Carousel.Item>
     
        <img
          className="d-block w-100"
          src="/images/img1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>CHRIS HOTEL</h3>
          <p>A BUSSINESS CLASS HOTEL</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/img2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>CHRIS HOTEL</h3>
          <p>A BUSSINESS CLASS HOTEL</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/img3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>CHRIS HOTEL</h3>
          <p>A BUSSINESS CLASS HOTEL :</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </div>
    <div className='room1'>
        <h1> DELUXE TWIN ROOM</h1>
    <p> Enjoy your stay even more at the hotel, knowing that some selected rooms include linen service and air conditioning. For a bit of entertainment, guests will find daily newspaper, television and cable TV available in some selected rooms. </p>
      <button> BOOK NOW FROM 3,347</button>
      </div>
    </div>
    <Services />
    <div className='rooms'>
      <div className='room1'>
        <h1> TRIPLE ROOM WITH VIEW</h1>
    <p> Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. </p>
      <button> BOOK NOW FROM 3,485 </button>
      </div>
    <div className='room1'>
    <Carousel slide={false}>
  
      <Carousel.Item>
     
        <img
          className="d-block w-100"
          src="/images/img1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>CHRIS HOTEL</h3>
          <p>A BUSSINESS CLASS HOTEL</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/img2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>CHRIS HOTEL</h3>
          <p>A BUSSINESS CLASS HOTEL</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/img3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>CHRIS HOTEL</h3>
          <p>A BUSSINESS CLASS HOTEL :</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
    <Services />
    <div className='cont'>
      <div className='box1'>
     
      <h1> BUSSINESS CLASS HOTEL</h1>
      <img src='/images/img6.jpg'></img>
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
    <Footer/>
    </>
  );
}

export default Rooms;
