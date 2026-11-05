import React, { useState, useEffect } from 'react';

export function Countdown({ targetUnixTimestamp }) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetUnixTimestamp));

  function calculateTimeLeft(timestamp) {
    // Convert current time to Unix timestamp in seconds
    const now = Math.floor(Date.now() / 1000);
    const difference = timestamp - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    const days = Math.floor(difference / (60 * 60 * 24));
    const hours = Math.floor((difference / (60 * 60)) % 24);
    const minutes = Math.floor((difference / 60) % 60);
    const seconds = Math.floor(difference % 60);

    return { hours, minutes, seconds, expired: false };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetUnixTimestamp));
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [targetUnixTimestamp]);

  return (
    <div className="card">
      <h3>Event Countdown</h3>
      {timeLeft.expired ? (
        <p className="expired">Time&apos;s up!</p>
      ) : (
        <div className="timer-display">
           <span>{String(timeLeft.hours).padStart(2, '0')}h</span> :{' '}
          <span>{String(timeLeft.minutes).padStart(2, '0')}m</span> :{' '}
          <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
        </div>
      )}
    </div>
  );
}