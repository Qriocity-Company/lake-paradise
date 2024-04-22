import React, { useState } from 'react';
import CalendarUI from './CalendarUI';
import person from '../assets/person.svg'
import child from '../assets/child.svg'


const BookingSection = () => {

  const host = 'https://lake-paradise-admin.onrender.com';
  // const host = 'http://localhost:3001';

  const [formData, setFormData] = useState({
    date: '',
    checkinDate: '',
    checkoutDate: '',
    promoCode: '',
    phoneNumber: '',
    adults: '1',
    children: '0',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    const res = await fetch(`${host}/messages/send-message`,{
      body:JSON.stringify({...formData}),
      headers:{
        'Content-Type':"application/json"
      },
      method:'POST'
    });
    const data = await res.json();
    console.log(data);

    if(res.ok){
      alert('Details Sent Succesfully!');
    }

    setFormData({
      date: '',
      checkinDate: '',
      checkoutDate: '',
      promoCode: '',
      phoneNumber: '',
      adults: '1',
      children: '0',
      message: ''
    });

  };

  return (
    <div id='book' className='w-full flex flex-col items-center mb-8 md:mb-12'>
      <div className='w-[95%] md:w-[90%] flex flex-col bg-[#E9F3F6] rounded-3xl  p-4 md:p-8 shadow-md'>

        <div className='flex flex-col font-archivo text-center'>
          <h1 className='leading-[38px] md:leading-normal text-[30px] md:text-[42px] font-bold'>Book the Paradise</h1>
          <p className='font-light text-[16px] md:text-[24px]'>Discover the perfect space for you!</p>
        </div>

        <form className='flex flex-col w-full' onSubmit={handleSubmit}>

          <div className='block md:flex md:gap-16 mt-8'>
            <div className='w-full md:w-[60%]'>
              <CalendarUI />
            </div>
            <div className='w-full md:w-[40%] mt-6 md:mt-0 flex flex-col justify-around gap-4 md:gap-0'>

              <div className='w-full flex flex-col gap-2'>
                <label htmlFor="date" className='w-full font-semibold text-lg'>Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className='bg-white p-2 py-4 rounded-xl mt-1 mb-3 w-full font-semibold text-lg'
                  required
                />
              </div>

              <div className='w-full flex flex-col gap-2'>
                <label htmlFor="checkinDate" className='w-full font-semibold text-lg'>Check-in Date *</label>
                <input
                  type="date"
                  id="checkinDate"
                  name="checkinDate"
                  value={formData.checkinDate}
                  onChange={handleChange}
                  className='bg-white p-2 py-4 rounded-xl mt-1 mb-3 w-full font-semibold text-lg'
                  required
                />
              </div>

              <div className='w-full flex flex-col gap-2'>
                <label htmlFor="checkoutDate" className='w-full font-semibold text-lg'>Checkout Date *</label>
                <input
                  type="date"
                  id="checkoutDate"
                  name="checkoutDate"
                  value={formData.checkoutDate}
                  onChange={handleChange}
                  className='bg-white p-2 py-4 rounded-xl mt-1 mb-3 w-full font-semibold text-lg'
                  required
                />
              </div>

            </div>
          </div>

          <div className='flex flex-col md:grid grid-cols-3 gap-4 mt-4 md:mt-8'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="country" className='w-full font-semibold text-lg'>Promo Code (if any)</label>
              <input
                id="promoCode"
                name="promoCode"
                value={formData.promoCode}
                onChange={handleChange}
                placeholder="Enter Promo Code"
                className='bg-white p-2 py-4 rounded-xl mt-1 mb-3 w-full font-semibold text-lg'
                type='text'
              />
               
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="phoneNumber" className='w-full font-semibold text-lg'>Phone Number *</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder='Enter Phone No.'
                value={formData.phoneNumber}
                onChange={handleChange}
                className='bg-white p-2 py-4 rounded-xl mt-1 mb-3 w-full font-semibold text-lg'
                required
              />
            </div>

            <div className='flex flex-col gap-2'>

              <label htmlFor="Person" className='w-full font-semibold text-lg'>Person</label>

              <div className='flex items-center w-full bg-white rounded-xl p-2 py-4 font-semibold text-lg gap-4 md:gap-8'>
                <div className='w-1/2 flex items-center gap-2 justify-around'>
                  <img src={person} alt="" className='h-6 w-6'/>
                  <label htmlFor="adults" className='font-semibold text-lg'>Adults</label>
                  <select
                    id="adults"
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    className='w-12'
                    required
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                   
                  </select>
                </div>
                <div className='w-1/2 flex items-center gap-2 justify-around'>
                  <img src={child} alt="" className='h-6 w-6'/>
                  <label htmlFor="children" className='font-semibold text-lg'>Children</label>
                  <select
                    id="children"
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    className='w-12'
                    required
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>
                </div>
              </div>
            </div>
            

            <div className='col-span-2 flex flex-col gap-2'>
              <label htmlFor="message" className='w-full font-semibold text-lg'>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className='bg-white p-2 py-4 rounded-xl mt-1 mb-3 w-full font-semibold text-lg'
              ></textarea>
            </div>

            <div className='w-full h-full flex flex-col justify-end md:p-4'>
              <button type="submit" className='bg-[#2637D3] p-4 text-white text-lg font-semibold rounded-xl w-full'>
                Check Availability
              </button>
            </div>

          </div>


        </form>

      </div>
    </div>
  );
};

export default BookingSection;
