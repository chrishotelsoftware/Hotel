import React from 'react';
import './Aboutus.css';
import Cards from '../Cards'
import Footer from '../Footer'


export default function Aboutus() {
  return (<div className="Aboutuspg_main">
  <div className="Aboutuspg_intro">
    <div className="tx">
      <p className="apg_t1">LIVE THE EXPERIENCE</p>
      <p className="apg_t2">MAKE YOURSELF AT HOME</p>
      <button>VIEW OUR ROOMS</button>
    </div>
  </div>
  <div className='abt_t'>
    <img src='/images/img11.jpg' id='im1'></img><br/>
    <img src='/images/img10.jpg' id='im2'></img>
    <p>
Make everyday special with all that Bangalore has to offer with a stay at Chris Hotel Whitefield.
Chris Hotel Whitefield offers numerous on-site facilities to satisfy even the most discerning guest.<br/>

Free internet access provided within the hotel keeps you connected throughout your stay. Airport transfer services can be booked before your check-in date, to ensure a smooth and convenient arrival or departure. Exploring Bangalore is made even more convenient with the taxi, car hire and shuttle services available at the hotel.


<br/>
For guests arriving by car, parking is provided free of charge. Always get the assistance you need with front desk services including concierge service, express check-in or check-out, luggage storage and safety deposit boxes.

<br/>
Booking the best tickets and getting the hottest restaurant reservations are made easy with help from the hotel’s ticket service and tours. Cold evenings are even better than warm ones, when you can cozy up at the hotel’s fireplace.
    </p>
  </div>
  <   Cards/>
 
  <Footer/>
  
</div>);
}
