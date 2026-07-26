'use client';

import { useEffect, useRef, useState } from 'react';

export default function TimeDisplay() {
  const [time, setTime] = useState('--:--');
  const timer = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    if (!timer.current)
      timer.current = setInterval(() => {
        setTime(
          new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            hour12: true,
            minute: 'numeric',
            second: '2-digit',
          }),
        );
      }, 1000);
  }, []);
  return <time>{time}</time>;
}
