import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';  // Import react-calendar for a simple calendar
import 'react-calendar/dist/Calendar.css'; // Import the default CSS for calendar
import { motion } from 'framer-motion'; // For animations

const CalendarWithTime = () => {
  const [date, setDate] = useState<Date | [Date, Date] | null>(new Date()); // State for the selected date (single date or range)
  const [currentTime, setCurrentTime] = useState<string>(''); // State for live clock

  // Update the live clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString(); // Get current time in HH:MM:SS format
      setCurrentTime(time);
    }, 1000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Handle date changes, including date range
  const handleDateChange = (newDate: Date | [Date, Date]) => {
    setDate(newDate);
  };

  return (
    <motion.div
      className="calendar-time-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Calendar */}
      <motion.div
        className="calendar-container"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
      >
        <Calendar
          onChange={handleDateChange} // Updates the selected date when clicked
          value={date} // Displays the current selected date or range
        />
      </motion.div>

      {/* Live Clock with Hours, Minutes, and Seconds */}
      <motion.div
        className="clock-container"
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
      >
        <p className="clock">{currentTime}</p>
      </motion.div>
    </motion.div>
  );
};

export default CalendarWithTime;
