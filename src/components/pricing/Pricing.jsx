import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"


const Pricing = () => {
  return (
    <>
      <Back title='Take Hurry Up!' />
      <section className='price padding card'>
        <div className='container grid '>
          <PriceCard />
        </div>
      </section>
     
    </>
  )
}

export default Pricing
