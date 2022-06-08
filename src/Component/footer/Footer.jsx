import React from 'react'
import "./footer.css"
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#home' className='footer__logo'>M Huzaifa Imran</a>
      <ul className='permalinks'>
        <li><a href='#home' className='buttonss'>Home</a></li>
        <li><a href='#about' className='buttonss'>About</a></li>
        <li><a href='#Experience ' className="buttonss">Experience</a></li>
        <li><a href='#contact' className='buttonss'>Contact</a></li>
      
      </ul>

      <div className="footer__socials">
        <a href='https://facebook.com/huzaifa.imran.39' >
          <FaFacebook />
        </a>
        <a href='https://instagram.com/m_huzaifa_imran0' >
          <FiInstagram />
        </a>
        <a href='https://twitter.com/MHuzaifaimran3' >
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022 MHI Industries. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;