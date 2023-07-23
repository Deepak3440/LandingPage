import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import Room from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Visitor from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
        <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
         
          <Route exact path='/room' component={Room} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/visitor' component={Visitor} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
