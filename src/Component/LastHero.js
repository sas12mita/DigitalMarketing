import React from 'react'
import './Component.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const LastHero = () => {
    return (
        <div className='footer'>
            <div className='boostim' style={{ width: '38%' }}>
                <img src='/Image/Logo.png' height={30} width={100} alt='loading..' />
                <p>We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.</p>
                <div className='icon' style={{ gap: '1px', display: 'flex' }}>
                    <span><FaFacebookF /></span>
                    <span><FaTwitter /></span>
                    <span><FaLinkedinIn /></span>
                    <span><FaInstagram /></span>
                </div>

            </div>
            <div className='navigation'>
            <p className='footermenu'>Navigation</p>
            <ul>
            <li>Service</li>
            <li>Agency</li>
            <li>Case Stydy</li>
            <li>Resource</li>
            <li>Contact</li>
            </ul>

            </div>
            <div className='license'>
            <p className='footermenu'>License</p>
            <ul>
            <li>Privacy Policy</li>
            <li>Copyright</li>
            <li> Email Address</li>
            </ul>
            </div>
            <div className='contact'>
            <p className='footermenu'>Contact</p>
            <ul>
            <li><span><FaPhoneAlt/> </span>(406) 555-0120</li>    
            <li><span><MdEmail/></span> Hey@boostim.com</li>
            <li><span><FaLocationDot/></span> 2972 Westheimer Rd. Santa Ana, Illinois 85486 </li>

            
            </ul>
            </div>
        </div>
    )
}

export default LastHero