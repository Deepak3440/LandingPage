import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      
      
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>VISITMANDU</h1>
            <span>Explore Mandu's Charms</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat felis nec risus blandit, ut efficitur odio ultrices. .</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Rooms</h3>
            <ul>
              <li>Single</li>
              <li>Double</li>
              <li>Triple</li>
              <li>hotel</li>
          
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Team</li>
              <li>Rooms</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
      
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>CONTACT INFO</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
               Moradabad City
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                6307395107
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                thakurdeep3440@gmail
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022  <i class="fa-solid fa-d"></i> by Deepak Singh Chauhan
        </p>
      </div>
    </>
  )
}

export default Footer
