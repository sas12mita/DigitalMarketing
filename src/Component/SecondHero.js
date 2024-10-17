import React from 'react'
import './Component.css';

const SecondHero = () => {
  return (
    <div className='secondhero'>
      <div className='upper'>
        <p style={{
          fontFamily: 'Plus Jakarta Sans',
          fontSize: '48px',
          fontWeight: 600,
          width: '45%',
          lineHeight: '62.4px',
          letterSpacing: '-0.03em',
          textAlign: 'left',
          margin: 0
        }}>Provide the best service with out of the box ideas</p>
        <p style={{
          fontFamily: 'Plus Jakarta Sans',
          fontSize: '16px',
          width: '55%',
          lineHeight: '28.8px',
          fontWeight: 500,
          textAlign: 'left',
          marginTop: 20
        }}> we are a passionate team of digital marketing enthusiasts dedicated to helping
          businesses succeed in the digital world. With years of experience and a deep understanding of
          the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.</p>
      </div>
      <div className='lower'>
        <div className='left'>
          <p style={{
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '84px',
            fontWeight: 700,
            lineHeight: '126px',
            letterSpacing: '-0.03em',
            textAlign: 'left',
            color:'white',
            marginTop:'-10px',
            marginLeft:'10px'

          }}>920<span style={{
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '84px',
            fontWeight: 700,
            lineHeight: '126px',
            letterSpacing: '-0.03em',
            textAlign: 'left',
            color:'white'
          }}>+</span></p>
          <p style={{
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '15px',
            fontWeight: 500,
            lineHeight: '32.3px',
            textAlign: 'left',
            color:'#878C91',
            marginTop:'-120px'
          }}> Project finish with superbly</p>
          <img src="Image/frame.png" height={40} style={{ marginTop: '70px',marginLeft:'20px' }}  alt='logo'/>
          </div>
        <div className='right'>
        <p style={{
          fontFamily: 'Plus Jakarta Sans',
          fontSize: '48px',
          fontWeight: 600,
          lineHeight: '67.2px',
          letterSpacing: '0.27em',
          textAlign: 'left',
          marginTop:'100px',
          marginLeft:'55px'
        }}> HOW WE WORK
        </p>
        </div>

      </div>
    </div>
  )
}

export default SecondHero
