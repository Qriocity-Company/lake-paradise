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

import useFetch from './hooks/useFetch'
import Loader from './components/Loader'

function App() {
  
  const { data, loading, error } = useFetch(`https://lake-paradise-admin.onrender.com/hotel/get-hotel`);

  console.log("data in app.jsx : ",data);

  if (loading) {
    return <div className='flex w-full min-h-[100vh] items-center justify-center'>
      <div className='flex w-full relative gap-4 items-center'>
        <Loader/>
        <p className='mt-32 md:mt-24 text-center text-lg absolute left-1/2 -translate-x-1/2'>
        Cleaning Up the Rooms...
        </p>
      </div>
    </div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='relative w-full flex flex-col justify-center items-center'>
      <Navbar/>
      <TopBanner/>
      <HeroSection heroImage = {data?.hotel?.heroImage}/>
      <About aboutImage={data?.hotel?.aboutImage}/>
      <Amenities/>
      
      <ImageCarousel hotelImages = {data?.hotel?.hotelImages}/>
      <BookingSection/>
      <BottomBanner bottomBanner={data?.hotel?.bottomBanner}/>
      <Features/>

      <Location/>
      <BottomText/>

      <Footer contacts={data?.hotel?.contacts}/>
    </div>
  )
}

export default App
