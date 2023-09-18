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
    <ul className='flex text-right justify-items-end'>
        <li className='w-12'>
            <p className='text-3xl'>{days}</p>
            <p className='italic'>days</p>
        </li>
        <li className='ml-3'><p className='text-xl'>:</p></li>
        <li className='w-12'>
            <p className='text-3xl'>{hours}</p>
            <p className='italic'>hours</p>
        </li>
        <li className='ml-3'><p className='text-xl'>:</p></li>
        <li className='w-12'>
            <p className='text-3xl'>{minutes}</p>
            <p className='italic'>mins</p>
        </li>
        <li className='ml-3'><p className='text-xl'>:</p></li>
        <li className='w-12'>
            <p className='text-3xl'>{seconds}</p>
            <p className='italic'>sec</p>
        </li>
    </ul>
  );
};

export default Timer;