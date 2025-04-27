import React, { useState } from 'react';
import styles from '../../styles/calendar/calendar.module.css';
import Navbar from '../ui/Navbar';

const Calendar = () => {
  const [view, setView] = useState<'year' | 'month' | 'week'>('month');

  const renderYearView = () => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return (
      <div className={styles.yearView}>
        {months.map((month, index) => (
          <div key={index} className={styles.month}>
            <h3>{month}</h3>
            <div className={styles.monthGrid}>
              {/* Render days of the month */}
              {[...Array(30)].map((_, day) => (
                <div key={day} className={styles.day}>
                  {day + 1}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderMonthView = () => {
    return (
      <div className={styles.monthView}>
        <h3>Current Month</h3>
        <div className={styles.monthGrid}>
          {[...Array(30)].map((_, day) => (
            <div key={day} className={styles.day}>
              {day + 1}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderWeekView = () => {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
      <div className={styles.weekView}>
        <h3>Current Week</h3>
        <div className={styles.weekGrid}>
          {daysOfWeek.map((day, index) => (
            <div key={index} className={styles.day}>
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
    <Navbar />
    <div className={styles.container}>
      <div className={styles.controls}>
        <button onClick={() => setView('year')} className={styles.button}>
          Year View
        </button>
        <button onClick={() => setView('month')} className={styles.button}>
          Month View
        </button>
        <button onClick={() => setView('week')} className={styles.button}>
          Week View
        </button>
      </div>
      <div className={styles.calendarView}>
        {view === 'year' && renderYearView()}
        {view === 'month' && renderMonthView()}
        {view === 'week' && renderWeekView()}
      </div>
    </div>
    </>
  );
};

export default Calendar;