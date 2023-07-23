import React from "react"
import Heading from "../../common/heading/Heading"
import "./dham.css"

const Dham= () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row '>
            <Heading  subtitle='WELCOME To My VISITMANDU' title='Best Platform' />
            <p> captivating blend of ancient temples, serene gardens, and traditional tea houses, preserving Japan's cultural heritage</p>
            <div className='button'>
              <button className='primary-btn'>
                Book A Room Now <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                Explore Rooms <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Dham
