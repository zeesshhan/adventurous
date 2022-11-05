import React from 'react'
import CardItems from './CardItems'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Watch these places for Adventure</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItems
                    src='Images/adventure.jpg'
                    text='Explore this hidden adventure'
                    label='Adventure'
                    path='/services'/>
                    <CardItems
                    src='Images/advent_1.jpg'
                    text='Explore this hidden adventure'
                    label='Adventure'
                    path='/services'/>
                </ul>
                <ul className='cards__items'>
                    <CardItems
                    src='Images/advent_2.jpg'
                    text='Explore this hidden adventure'
                    label='Adventure'
                    path='/services'/>
                    <CardItems
                    src='Images/advent_3.jpg'
                    text='Explore this hidden adventure'
                    label='Adventure'
                    path='/services'/>
                    <CardItems
                    src='Images/advent_4.jpg'
                    text='Explore this hidden adventure'
                    label='Adventure'
                    path='/services'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
