
import './App.css'
import Home from './landing_page/home/Home'
import About from './landing_page/about/About'
import PricingPage from './landing_page/pricing/PricingPage'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './landing_page/signup/Signup'
import Support from './landing_page/support/Support'
import Universe from './landing_page/product/Universe'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import Notfound from './landing_page/Notfound'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path ="/" element ={<Home />}></Route>
      <Route path ="/signup" element ={<Signup />}></Route>
      <Route path ="/about" element ={< About/>}></Route>
      <Route path ="/product" element ={<Universe />}></Route>
      <Route path ="/pricing" element ={<PricingPage />}></Route>
      <Route path ="/support" element ={<Support />}></Route>
      <Route path ="/*" element ={<Notfound />}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    
    </>
    
  )
}

export default App
