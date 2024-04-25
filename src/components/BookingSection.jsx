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
    message: '',
    email:'',
    name:''
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
      message: '',
      email:'',
      name:''
    });

  };

  return (
    <div id='book' className='w-full flex flex-col items-center mb-8 md:mb-12'>
      <div className='w-[100%] md:w-[100%] flex flex-col bg-[#E9F3F6] p-4 md:p-8 '>

        <div className='flex flex-col font-archivo text-center'>
          <h1 className='leading-[38px] md:leading-normal text-[30px] md:text-[42px] font-bold'>Book the Paradise</h1>
          <p className='font-light text-[16px] md:text-[24px]'>Discover the perfect space for you!</p>
        </div>

        <form className='flex flex-col w-full' onSubmit={handleSubmit}>

          <div className='block md:flex md:gap-8 lg:gap-16 mt-8'>
            <div className='w-full md:w-[60%]'>
              <CalendarUI />
            </div>
            <div className='w-full md:w-[40%] mt-6 md:mt-0 flex flex-col justify-between gap-4 md:gap-0'>

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
              <div className='w-full flex flex-col gap-2'>
                <label htmlFor="name" className='w-full font-semibold text-lg'>Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder='e.g. John Doe'
                  value={formData.name}
                  onChange={handleChange}
                  className='bg-white p-2 py-4 rounded-xl mt-1 mb-3 w-full font-semibold text-lg'
                  required
                />
              </div>

              <div className='w-full flex flex-col gap-2'>
                <label htmlFor="checkoutDate" className='w-full font-semibold text-lg'>Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className='bg-white p-2 py-4 rounded-xl mt-1 mb-3 w-full font-semibold text-lg'
                  required
                  placeholder='eg@gmail.com'
                />
              </div>

              
              

            </div>
          </div>

          <div className='flex flex-col md:grid grid-cols-3 gap-4 mt-4 md:mt-8'>
            <div className='w-full flex flex-col gap-2'>
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

            
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="adults"  className='w-full font-semibold text-lg'>Adults</label>
                <div className='mt-1 mb-3 w-full flex items-center gap-2 bg-white rounded-xl px-3 h-full'>
                  <img src={person} alt="" className='h-5 w-5'/>
                  <select
                    id="adults"
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    className='bg-white p-2 rounded-xl  w-full font-semibold text-lg py-4'
                    required
                  >
                    {[...Array(7)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>{index + 1}</option>
                    ))}
                  </select>
                </div>
              </div>

            

            <div className='flex flex-col gap-1 md:gap-2'>

              <label htmlFor="Person" className='w-full font-semibold text-lg'>Children</label>
              <div className='mt-1 mb-3 w-full flex items-center gap-2 bg-white rounded-xl px-3 h-full'>
                <img src={child} alt="" className='h-5 w-5'/>
                <select
                  id="children"
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  className=' bg-white p-2 rounded-xl  w-full font-semibold text-lg py-4'
                  required
                >
                  {[...Array(7)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>{index + 1}</option>
                  ))}
                </select>
              </div>
            </div>
            
            
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

            <div className='col-span-1 flex flex-col gap-2'>
              <label htmlFor="message" className='w-full font-semibold text-lg'>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="1"
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
