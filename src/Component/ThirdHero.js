import React from 'react'
import './Component.css';

const ThirdHero = () => {
  return (
    <div className='thirdhero'>
      <div className='upper' >
      <p> Real-world examples of how we have helped companies achieve their marketing objectives.</p>
      <div>
      <button>All Work[10]</button>
      <button>UI/UX Design[10]</button>
      <button>Digital Marketing[10]</button>
      <button>Branding[10]</button>
      </div>
      </div>
      <div className='lower'>
      <div className='circle'>
      <button className='center'>See Detail</button>
      </div>
      <div className='rectangle'>
      <p className='upper'>______Ai Corporation. 2023</p>
      <p className='lower'>Ai Wave - Ai Chatbot Mobile App</p>

      </div>
      <div className='rectangle'>
      <p className='upper'>______Lancer Corporation. 2023</p>
      <p className='lower'>App Lancer - Freelance Mobile App</p>
</div>
      <div></div>

      
      </div>
    </div>
  )
}

export default ThirdHero
