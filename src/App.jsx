import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Navbar/>
      <TopBanner/>
      <HeroSection/>
      {/* Booking Section to be added */}
      <About/>
      <Amenities/>
      <RoomImages/>
      <Location/>
      <BottomBanner/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default App
