import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from'../../assets/profile_img.jpg'

const Hero = () => {
  return (
    <div id = 'home' className='hero'>
      <img src={profile_img} alt='' />
      <h1><span>I am Hitesh Bisht,</span> Software developer  based in India </h1>
      <p>I am frontend developer from Indore, India with 1 years of experience</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero