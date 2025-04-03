import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Carousle from '../component/Carousle'
import Lightbox from '../component/Lightbox'
import About from '../component/About'
import Contact from '../component/Contact'
import Services from '../component/Services'
import Counter from '../component/Counter'
import Testimonial from '../component/Testimonial'
import Companies from '../component/Companies'
import Upbutton from '../component/Upbutton'
import SloganBanner from '../component/SloganBanner'
import Faqs from '../component/Faqs'
// import Gallery from '../component/Gallery'

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Carousle/>
    <SloganBanner/>
    <About/>
    <Counter/>
    <Companies/>
    {/* <Testimonial/> */}
    <Services/>
    <Lightbox/>
    {/* <Gallery/> */}
    <Faqs/>
    <Contact/>
    <Footer/>
    <Upbutton/>
    </>
  )
}

export default Homepage