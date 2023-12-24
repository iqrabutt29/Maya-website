// MyCalendar.js

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.scss'; // Import the SCSS file

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    setDate(newDate);
  };

  const prevMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    setDate(newDate);
  };

  return (
    <>
    <div className='d-flex justify-content-center align-items-center h-100'>
      <Calendar
        onChange={onChange}
        value={date}
        prev2Label={null} // Remove default arrows
        prevLabel={<div className="custom-arrow" onClick={prevMonth}>{'<'}</div>} // Custom prev arrow
        nextLabel={<div className="custom-arrow" onClick={nextMonth}>{'>'}</div>} // Custom next arrow
        next2Label={null} // Remove default arrows
      />
    </div>
    </>
  );
};

export default MyCalendar;
