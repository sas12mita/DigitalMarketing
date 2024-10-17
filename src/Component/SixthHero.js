import React from 'react';
import './Component.css';
import { FaBell, FaArrowRight } from 'react-icons/fa';


const SixthHero = () => {
  return (
    <div className='sixthhero'> {/* Corrected this line */}
      <div className='upper'>
        <div className='left' style={{
          width: '50%',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '40px',
          fontWeight: 600,
          lineHeight: '62.4px',
          letterSpacing: '-0.03em',
          textAlign: 'left'
        }}>
          Digital Marketing & SEO Services That Grow Traffic & Increase Revenue
        </div>
        <div className='right' style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '16px',
          width: '50%',
          fontWeight: 500,
          lineHeight: '28.8px',
          textAlign: 'left',
          color: '#878C91'
        }}>
          <p> We are the top digital marketing agency for branding corp. We offer a full range of services
            to help clients improve their search engine rankings and drive more traffic to their websites.</p>

          <p><button style={{
            padding: '14px 25px',
            gap: '32px',
            color: 'black',
            borderRadius: '50px',
            border: '1px solid #010205'
          }}>See More</button></p>
        </div>
      </div>
      <div className='lower' style={{ marginTop: '30px', display:'flex', justifyContent:'space-evenly',gap:'20px'}}>
        <div className='card' style={{ backgroundColor: 'white', width: '33%', paddingLeft:'30px', paddingRight:'30px'}}>
          <div className='upper' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p style={{
              width: '15px',
              height: '15px',
              borderRadius: '50%',
              backgroundColor: ' #45A7DE',
            }}></p>
            <p style={{
              fontFamily: 'Plus Jakarta Sans',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '22.4px',
              textAlign: 'left',
              color: '#878C91'
            }}>5 min read</p>
          </div>
          <p style={{
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '26px',
            width: '90%',
            fontWeight: 600,
            lineHeight: '39px',
            letterSpacing: '-0.03em',
            textAlign: 'left',
            marginTop:'-10px'
          }}>How a Digital Marketing Agency Can Boost Your Business</p>

          <div className='lower' style={{display:'flex',justifyContent:'space-between'}}>
            <p style={{
              fontFamily: 'Plus Jakarta Sans',
              fontSize: '14px',
              width:'78%',
              fontWeight: 500,
              lineHeight: '22.4px',
              textAlign: 'left',
            }}>We are the top digital marketing agency for  branding corp. We offer a full rang  engine ....</p>
            <button style={{
              height:'50px',
              width:'25%',
              backgroundColor:'black',
              borderRadius: '70px',
              marginTop:'20px',
              color:'white'
            }}><FaArrowRight/></button>
          </div>
        </div>
        <div className='card' style={{ backgroundColor: 'white', width: '33%', paddingLeft:'30px', paddingRight:'30px'}}>
        <div className='upper' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            backgroundColor: '#EA5F38',
          }}></p>
          <p style={{
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '22.4px',
            textAlign: 'left',
            color: '#878C91'
          }}>5 min read</p>
        </div>
        <p style={{
          fontFamily: 'Plus Jakarta Sans',
          fontSize: '26px',
          width: '90%',
          fontWeight: 600,
          lineHeight: '39px',
          letterSpacing: '-0.03em',
          textAlign: 'left',
          marginTop:'-10px'
        }}>The Latest Trends and Strategies with a Digital Marketing Agency</p>

        <div className='lower' style={{display:'flex',justifyContent:'space-between'}}>
          <p style={{
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '14px',
            width:'78%',
            fontWeight: 500,
            lineHeight: '22.4px',
            textAlign: 'left',
          }}>Working with this digital marketing agency has been a true partnership.
           They have taken the time to understand our business and industry</p>
          <button style={{
            height:'50px',
            width:'25%',
            borderRadius: '70px',
            marginTop:'20px',
            border:'1px solid black',
        
          }}><FaArrowRight/></button>
        </div>
      </div>
      <div className='card' style={{ backgroundColor: 'white', width: '33%', paddingLeft:'30px', paddingRight:'30px'}}>
      <div className='upper' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p style={{
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          backgroundColor: ' #6A26F1',
        }}></p>
        <p style={{
          fontFamily: 'Plus Jakarta Sans',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '22.4px',
          textAlign: 'left',
          color: '#878C91'
        }}>5 min read</p>
      </div>
      <p style={{
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '26px',
        width: '90%',
        fontWeight: 600,
        lineHeight: '39px',
        letterSpacing: '-0.03em',
        textAlign: 'left',
        marginTop:'-10px'
      }}>Maximizing ROI with the Expertise of a Digital Marketing Agency</p>

      <div className='lower' style={{display:'flex',justifyContent:'space-between'}}>
        <p style={{
          fontFamily: 'Plus Jakarta Sans',
          fontSize: '14px',
          width:'78%',
          fontWeight: 500,
          lineHeight: '22.4px',
          textAlign: 'left',
        }}>What sets this digital marketing agency apart is their commitment to transparency and collaboration. 
        They keep us informed every step of the way,</p>
        <button style={{
          height:'50px',
          width:'25%',
          border:'1px solid black',
          borderRadius: '70px',
          marginTop:'20px',
      
        }}><FaArrowRight/></button>
      </div>
    </div>
      </div>
    </div>
  );
}

export default SixthHero;
