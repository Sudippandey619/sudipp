'use client';

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { motion } from 'framer-motion';
import Style from '../styles/Calender.module.css';

type CalendarValue = Date | [Date, Date] | null;

const CalendarWithTime = () => {
  const [date, setDate] = useState<CalendarValue>(new Date());
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDateChange = (newDate: CalendarValue) => {
    setDate(newDate);
  };

  return (
    <motion.div
      className={Style.calendarTimeContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className={Style.calendarContainer}
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 25 }}
      >
        <Calendar
          onChange={handleDateChange}
          value={date}
        />
      </motion.div>

      <motion.div
        className={Style.clockContainer}
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 25 }}
      >
        <p className={Style.clock}>{currentTime}</p>
      </motion.div>
    </motion.div>
  );
};

export default CalendarWithTime;
