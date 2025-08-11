'use client';

import { useState, useEffect } from 'react';

export function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = (seconds % 60).toString().padStart(2, '0');

  return <span>Time spent: {minutes}:{remainingSeconds}</span>;
} 