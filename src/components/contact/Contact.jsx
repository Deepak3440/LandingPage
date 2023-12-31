import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
          <h1>Use Map Here</h1>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We value your feedback and inquiries. Feel free to reach out to us at any time</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p> MORADABAD CITY </p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> thakurdeep3440@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>6307395107</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND Query</button>
            </form>

            <h3>Follow us here</h3>
            <span>Linkdln,Instagram</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
