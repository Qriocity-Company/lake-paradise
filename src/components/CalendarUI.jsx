import React, { useState, useEffect } from 'react';

const CalendarUI = () => {
 
  const [date, setDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [defaultPrice, setDefaultPrice] = useState('');
  const host = "https://lake-paradise-admin.onrender.com";
  
  const changeMonth = (amount) => {
    setDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + amount);
      return newDate;
    });
  };

  const getMonthYear = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = () => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const renderCalendarDays = () => {
    const firstDay = getFirstDayOfMonth();
    const totalDays = getDaysInMonth(date.getMonth(), date.getFullYear());
    const days = [];

    // Add empty placeholders for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div className="empty-day" key={`empty-${i}`}></div>);
    }

    // Add numbered days for the month
    for (let i = 1; i <= totalDays; i++) {
      const currentDate = new Date(date.getFullYear(), date.getMonth(), i);
      const bookedDate = dates.find(d => new Date(d.date).getTime() === currentDate.getTime());
      const isBooked = bookedDate ? bookedDate.booked : false;
      const price = bookedDate ? bookedDate.price : defaultPrice;

      days.push(
        <div
          className={`bg-white border border-zinc-400 cursor-pointer flex flex-col items-center gap-2 py-4 calendar-day ${isBooked ? 'bg-zinc-200' : ''}`}
          key={`day-${i}`}
        >
          <p className={isBooked ? 'line-through font-semibold' : 'font-semibold'}>{i}</p>
          <p className={`w-fit h-fit text-xs md:text-sm ${isBooked?'line-through':''}`}>${price}</p>
        </div>
      );
    }
    return days;
  };

  

  const fetchDates = async () => {
    try {
      const response = await fetch(`${host}/date/get-all-dates`);
      const data = await response.json();
      setDates(data.dates);
    } catch (error) {
      console.error('Error fetching dates:', error);
    }
  };

  const fetchDefaultPrice = async () => {
    try {
      const response = await fetch(`${host}/hotel/get-default-price/66221c2cce3f47d7d06cd26a`);
      const data = await response.json();
      setDefaultPrice(data.defaultPrice);
    } catch (error) {
      console.error('Error fetching default price:', error);
    }
  };

  useEffect(() => {
    fetchDates();
    fetchDefaultPrice();
  }, []);


  return (
    <div className='bg-[#E9F3F6] relative w-full flex items-center justify-center'>

        <div className='w-full'>
          <div className="flex items-center justify-between">
            <button onClick={() => changeMonth(-1)}>&#9664;</button>
            <span>{getMonthYear()}</span>
            <button onClick={() => changeMonth(1)}>&#9654;</button>
          </div>
          <div className="mt-4">
            <div className='grid grid-cols-7 text-center'>
              <div className="font-semibold">Sun</div>
              <div className="font-semibold">Mon</div>
              <div className="font-semibold">Tue</div>
              <div className="font-semibold">Wed</div>
              <div className="font-semibold">Thu</div>
              <div className="font-semibold">Fri</div>
              <div className="font-semibold">Sat</div>
            </div>
            <div className="mt-4 grid grid-cols-7 text-center text-sm md:text-base">
              
              {renderCalendarDays()}
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default CalendarUI;
