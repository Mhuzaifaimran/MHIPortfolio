import React from 'react'
import './about.css'
import ME from '../../assets/mee-about.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
      <h5>Go To Know</h5>
      <h2>About</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" className='mee-amg'/>
          </div>
        </div>


        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>80+</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>Experienced Software Engineer with a
            demonstrated history of working in the
            computer software industry. Skilled in Python, Scrapy, React.js, Node.js, PHP, Laravel, C++, Java, and Data Engineering. Strong engineering
              professional with a bachelor's Degree In
              Computer Science.</p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;