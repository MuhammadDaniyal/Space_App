import React from 'react'
import './MemberCard.css';
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

const Aboutcard = () => {
  return (
    <>
    <div className=" col-10 col-lg-4 col-md-4 mx-auto d-flex justify-content-center">
      <div class="team_card">
        <div className="circle">
          <img className='team_img rotateY-team-img' src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/47d488474b1750ad8f9a684f/fggf.jpg" alt="" />
        </div>

        <div className='team_content'>
          <h3>Ahsan Omerjee</h3>
          <h5>CEO</h5>
          <div className="icons">
            <div><FiFacebook size={23} color='#1A2238' /></div>
            <div><FiInstagram size={23} color='#1A2238' /></div>
            <div><FiLinkedin size={23} color='#1A2238' /></div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Aboutcard