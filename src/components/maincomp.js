import React from 'react'
import { Button } from './Button'
import './maincomp.css'

function Maincomp() {
    return (
        <div className='hero-container'>
            <img src="/photos/ank2.jpeg" alt="" />
         <h1>PUSH THROUGH PAIN EVERY SINGLE DAY</h1> 
         <p>What are you waiting for? </p>  
         <div className='hero-btns'>
             <Button className='btns' buttonStyle='btn--outline'  buttonSize='btn--large'>JOIN US</Button>
         </div>
        </div>
    )
}

export default Maincomp
