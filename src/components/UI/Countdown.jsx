import React, { useState, useEffect } from 'react';

function calculateTimeLeft(timestamp) {
  const difference = Number(timestamp) - Date.now();

  if (difference <= 0) {
    return {
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true
    };
  }
    
  const totalSeconds = Math.ceil(difference / 1000);

  const hours = Math.floor(totalSeconds / 3600) %24;
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { hours, minutes, seconds, expired: false };
}

export function Countdown({ targetUnixTimestamp }) {
  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeLeft(targetUnixTimestamp)
  );

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft(targetUnixTimestamp));
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [targetUnixTimestamp]);
if (timeLeft.expired) {
    return null;
}
  return (
    <div className="card"> 
      {!timeLeft.expired && (
    <div className="timer-display">
        <span>{String(timeLeft.hours).padStart(2, '0')}h</span>{' '}
        <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>{' '}
        <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
    </div>
    )}
    </div>
  );
}