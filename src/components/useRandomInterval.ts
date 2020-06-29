import React, { useEffect, useCallback } from 'react';

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

const useRandomInterval = (callback: () => void, minDelay: number, maxDelay: number) => {
  const timeoutRef = React.useRef<number | null>(null);
  const callbackRef = React.useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleTick = () => {
      const nextTickAt = random(minDelay, maxDelay);

      timeoutRef.current = window.setTimeout(() => {
        callbackRef.current();
        handleTick();
      }, nextTickAt);
    };

    if (typeof minDelay === 'number' && typeof maxDelay === 'number') {
      handleTick();
    }

    return () => {
      if (timeoutRef.current !== null) {
        console.log('u', timeoutRef.current);
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const cancel = useCallback(function() {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
  }, []);
  return cancel;
};

export default useRandomInterval;
