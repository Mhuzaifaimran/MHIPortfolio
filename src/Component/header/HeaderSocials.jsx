import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
<a href='https://linkedin.com/in/mhuzaifaimran' target="blank"><BsLinkedin/></a>
<a href='https://github.com' target="blank"><BsGithub/></a>
<a href='https://instagram.com' target="blank"><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocials;