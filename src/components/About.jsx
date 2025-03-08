import React from 'react'
import '../styles/About.css'
import aboutImg from '../assets/about-photo-Mna.jpg'

const About = () => {
  return (
    <div className='about-container' id='about'>

      <div className="about-image">
          <img src={aboutImg} alt="" />
      </div>

      <div className="about-text">
          <span>
            <div className="about-line" />
            <h5>About Us</h5>
          </span>
          <h3>Who are we.... </h3>
          <p>At StrongHer Fitness, we believe that every woman has the power to be strong, confident, and unstoppable. Our mission is to empower women of all ages and fitness levels to discover their inner strength through personalized fitness plans, expert coaching, and a supportive community.

We offer a range of fitness programs designed to help you achieve your goals, whether you're looking to build muscle, improve endurance, or simply feel your best. Our team of dedicated trainers is here to guide you every step of the way, ensuring a workout experience that is not only challenging but also fun and inspiring.</p>
      </div>

    </div>
  )
}

export default About