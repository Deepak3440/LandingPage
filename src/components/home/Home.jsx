import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"

import Dham from "./hero/Dham"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"

const Home = () => {
  return (
    <>
      <Dham />
      <AboutCard />
      
      <Testimonal />
      <Hblog />
      <Hprice />
    </>
  )
}

export default Home
