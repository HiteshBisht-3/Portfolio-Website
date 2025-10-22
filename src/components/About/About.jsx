import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpeg'

const About = () => {
  return (
  <div id = 'about' className='about'>
    <div className="about-title">
      <h1>About me</h1>
      <img src={theme_pattern} alt="" />
    </div>
    <div className="about-sections">
      <div className="about-left">
        <img src={profile_img} alt="" />
      </div>
      <div className="about-right">
        <div className="about-para">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum molestiae, porro numquam alias culpa odit harum maxime aut laudantium earum ducimus aliquid quisquam sint laborum dolores tempore ipsa dignissimos!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, sequi perspiciatis quia saepe inventore et dolorem aspernatur porro aliquid expedita, debitis, libero qui quidem non? Sapiente, exercitationem. Doloremque, placeat vitae.</p>
        </div>
        <div className="about-skills">
          <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}}/></div>
          <div className="about-skill"><p>React JS</p><hr style={{width: "70%"}}/></div>
          <div className="about-skill"><p>JavaScript</p><hr style={{width: "60%"}}/></div>
          <div className="about-skill"><p>Next JS</p><hr style={{width: "50%"}}/></div>
        </div>
      </div>
    </div>
    <div className="about-achievements">
      <div className="about-achievement">
        <h1>10+</h1>
        <p>YEARS OF EXPERIENCE</p>
      </div>
      <hr />
      <div className="about-achievement">
        <h1>90+</h1>
        <p>Projects Completed</p>
      </div>
      <hr />
      <div className="about-achievement">
        <h1>15+</h1>
        <p>Happy Clients</p>
      </div>
    </div>
  </div>
  )
}

export default About