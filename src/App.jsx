import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import TopBanner from './components/TopBanner'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Amenities from './components/Amenities'
import RoomImages from './components/RoomImages'
import Location from './components/Location'
import Footer from './components/Footer'
import BottomBanner from './components/BottomBanner'
import Features from './components/Features'
import BookingSection from './components/BookingSection'
import ImageCarousel from './components/ImageCarousel'
import BottomText from './components/BottomText'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative w-full flex flex-col justify-center items-center'>
      <Navbar/>
      <TopBanner/>
      <HeroSection/>
      <About/>
      <Amenities/>
      {/* <RoomImages/> */}
      <ImageCarousel/>
      <BookingSection/>
      <BottomBanner/>
      <Features/>

      <Location/>
      <BottomText/>

      <Footer/>
    </div>
  )
}

export default App
