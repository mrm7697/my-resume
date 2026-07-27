'use client';

import { useEffect, useState } from 'react';

export default function LoadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 0;
        }
        return prevProgress + 10;
      });
    }, 200);
  }, []);

  return <progress max="100" value={progress}></progress>;
}
