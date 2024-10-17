import React from 'react'
import {FaArrowRight } from 'react-icons/fa';

const Seventhhero = () => {
  return (
    <div style={{backgroundColor:'#FAFAFA', padding:'10px', boxSizing:'border-box'}}>
    <div style={{display:'flex', justifyContent:'space-around', padding:'10px 80px 0px 80px', color:'white', backgroundColor:'black',borderRadius:'10px',height:'190px'}}>
      <p style={{
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '80px',
        fontWeight: 600,
        marginTop:'20px',
        lineHeight: '104px',
        letterSpacing: '-0.03em',
        textAlign: 'left',
      }}>Ready to work with us ?</p>
      <button style={{
        width: '219px',
        height: '56px',
        padding: '16px 32px',
        gap: '42px',
        marginTop:'50px',
        borderRadius: '70px',
      }}>Get Started  <span style={{width:'30px', marginLeft:'20px'}}><FaArrowRight/></span></button>
    </div>
    </div>
  )
}

export default Seventhhero