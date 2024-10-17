import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import './Component.css';

const FourthHero = () => {
  return (
    <div className='fourthhero'>
  <div className='upper'>
    <p>“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”</p>
  </div>

  <div className='lower'>
    <div className='left'>
      <div style={{  
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        backgroundColor: '#dfdede'
      }}>
      </div>

      <div style={{
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '20px',
        fontWeight: 700,
        lineHeight: '36px',
        marginLeft:'10px'
      }}>
        Michael Kaizer
        <br/>
        <span style={{
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '28.8px',
    marginLeft:'',
    textAlign: 'left'}}>CEO of Basecamp Corp</span>
      </div>
    </div>
  

  <div className='right'>
  <button  style={{
    width: '88px',
    height: '56px',
    padding: '16px 32px',
    gap: '42px',
    borderRadius: '70px',
    borderWidth: '1px',
    borderStyle: 'solid',
    transform: 'rotate(-180deg)',
  }}> <FaArrowRight/></button>
  <button style={{width: '88px',
    height: '56px',
    padding: '16px 30px',
    gap: '42px',
    borderRadius: '70px',
    borderWidth: '0px',
    backgroundColor:'#FAFAFA',
    }}>01/<span style={{color:'gray'}}>05</span></button>
  
  
    <button style={{
    width: '88px',
    height: '56px',
    padding: '16px 32px',
    borderRadius: '70px',
    borderWidth: '1px',
    borderStyle: 'solid',
    backgroundColor:'black',
    color:'white',
    transform: 'rotate(-360deg)',
  }}><FaArrowRight/></button>

  </div></div>
</div>

  )
}

export default FourthHero;
