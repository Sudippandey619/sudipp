import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { motion } from 'framer-motion';

// Define the expected calendar value type
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
      className="calendar-time-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="calendar-container"
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
        className="clock-container"
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 25 }}
      >
        <p className="clock">{currentTime}</p>
      </motion.div>
    </motion.div>
  );
};

export default CalendarWithTime;
