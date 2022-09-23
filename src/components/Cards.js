import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Feautred Rooms !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.png'
              text='Feautred Room: Double Deluxe     '
              label='Rs 3000 /Night'
              path='/services'
            />
            <CardItem
              src='images/img4.png'
              text=' Feautred Room: Family Deluxe      '
              label='Rs 2500 /Night'
              path='/products'
            />
            <CardItem
              src='images/img5.png'
              text='Feautred Room: Presidential'
              label='Rs 4000 /Night'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
