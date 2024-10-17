import React from 'react';
import { FaBell, FaArrowRight } from 'react-icons/fa';
import { IoTrendingUpOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './Component.css';

const FirstHero = () => {
  return (
    <div>
      <nav>
        <div className='left'>
          <img src='/Image/Logo.png' height={30} width={90} alt='logo' />
          <div className='navItem'>
            <ul>
              <li><Link to="#" className='Nav-link'>Service</Link></li>
              <li><Link to="#" className='Nav-link'>Agency</Link></li>
              <li><Link to="#" className='Nav-link'>Case Study</Link></li>
              <li><Link to="#" className='Nav-link'>Resource</Link></li>
              <li><Link to="#" className='Nav-link'>Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className='right'>
          <button className='btn'>Get Started</button>
          <span className='notification'><FaBell /></span>
        </div>
      </nav>

      <div className='firsthero'>
        <div className='left'>
          <p className='main'>
            Stay ahead of the curve with our forward-thinking
          </p>
          <p className='subcontent'>
            An award-winning SEO agency with disciplines in digital marketing, design, and website development. Focused on understanding you.
          </p>
          <div style={{ display: 'flex', gap: '50px' }}>
            <button>Schedule call <FaArrowRight /></button>
            <span style={{
              textDecoration: 'underline',
              fontFamily: 'Plus Jakarta Sans',
              marginTop: '11px',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '28.8px',
              textAlign: 'left'
            }}>
              View case Study
            </span>
          </div>
          <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            <p style={{
              fontFamily: 'Plus Jakarta Sans',
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '22.4px',
              textAlign: 'left',
              width: '30%'
            }}>
              Trusted by the world's biggest brands
            </p>
            <img src="Image/icons.png" height={30} style={{ marginTop: '15px' }}  alt='logo'/>
          </div>
        </div>
        <div className='right'>
          <div className='upperRight'>
            <div className='left'>
              <div className='rectangle'></div>
              <div className='circle'><br/><span style={{ color:'greenyellow', marginTop:'60px', marginLeft:'30px',fontSize:'50px',fontWeight:'500px'}}><IoTrendingUpOutline/></span></div>
            </div>
            <div className='Right'>
              <p style={{
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '84px',
                fontWeight: 700,
                lineHeight: '126px',
                letterSpacing: '-0.03em',
                textAlign: 'left',
                marginTop: 20,
                // Correctly applying margin-top
              }}>
                230+
              </p>
              <p style={{
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '16px',
                fontWeight: 500,
                marginTop: -100,
                lineHeight: '24px',
                textAlign: 'left',
                color: '#5C5D5F'
              }}>
                Some big companies that we work with and trust us very much.
              </p>
            </div>
            <div className='lowerRight'></div>
          </div>
          <div className='lowerRight'>
            <div className='paragraph'>
              <p style={{
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '17.64px',
                marginTop:10,
                marginLeft:10,
                letterSpacing: '-0.03em',
                textAlign: 'left',

                color: 'white',

              }}> ______Drive More Traffic and Sales </p>
              <p style={{
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '32px',
                fontWeight: 600,
                lineHeight: '41.6px',
                letterSpacing: '-0.02em',
                marginLeft:10,
                marginTop:-10,
                textAlign: 'left',
                color: 'white',
                width: '280px'
              }}>Drive more traffic and product sales </p>
            </div>
            <div className='img'>
            <img src="Image/bar.png" height={140} style={{ marginTop: '15px' }}  alt='logo'/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstHero;
