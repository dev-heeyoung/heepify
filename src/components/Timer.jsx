import React from 'react';
import { useState, useEffect } from 'react';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 31, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ul className='flex text-right'>
        <li className='w-fit'>
            <p className='text-lg md:text-2xl'>{days}</p>
            <p className='italic opacity-60 text-sm md:text-base'>days</p>
        </li>
        <li className='ml-3'><p className='text-xl opacity-60'>:</p></li>
        <li className='w-fit'>
            <p className='text-lg md:text-2xl'>{hours}</p>
            <p className='italic opacity-60 text-sm md:text-base'>hours</p>
        </li>
        <li className='ml-3'><p className='text-xl opacity-60'>:</p></li>
        <li className='w-fit'>
            <p className='text-lg md:text-2xl'>{minutes}</p>
            <p className='italic opacity-60 text-sm md:text-base'>mins</p>
        </li>
        <li className='ml-3'><p className='text-xl opacity-60'>:</p></li>
        <li className='w-fit'>
            <p className='text-lg md:text-2xl'>{seconds}</p>
            <p className='italic opacity-60 text-sm md:text-base'>secs</p>
        </li>
    </ul>
  );
};

export default Timer;