import React from 'react';
import './card.css';
import CardItem from './cardItems';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC plans!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
         
          <ul className='cards__items'>
            <CardItem
              src='photos/ank3.jpeg'
              text='Transform yourself from fat to fit in 90 days of journey'
              label='Fat2Fit'
              path='/services'
            />
            <CardItem
              src='photos/ank6.jpeg'
              text='build your strength with explosive workout'
              label='strength'
              path='/products'
            />
            <CardItem
              src='photos/ank7.jpeg'
              text='from cardio to muscle building all in one'
              label='All rounder'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;