import React from 'react'
import './style.css'
import avatarImage from '../../../assets/images/avatar.jpeg'
export default function Hero() {
  return (
    <div className='home-hero'>
            <div className="home-hero-avatar-container">
                <img src={avatarImage} className="home-hero-avatar-image"/>
            </div>
            <div className="home-hero-text-content">
                    <div className="home-hero-hello-text">Hello! I Am</div>
                    <div className="home-hero-name-text">Adem Şehirgel</div>
                    <div className="home-hero-description-text">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite.</div>
            </div>
            <div className="home-hero-link">
                <a href="#about"> More About Me <i class="fa-solid fa-arrow-right-long"></i> </a>
            </div>
    </div>
  )
}
