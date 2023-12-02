'use client';
import { ChevronUp } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { MotionValue, motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const fontSize = 15;
const padding = 2;
const height = fontSize + padding;

const CustomVoteButton = ({
  className,
  iconSize,
  deger,
}: {
  className?: string;
  iconSize: number;
  deger: number;
}) => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(deger);

  const handleClick = () => {
    setValue(value + 1);
    setToggle(!toggle);
  };
  return (
    <div
      className={cn(
        'border-2 border-slate-200  w-10 flex flex-col items-center h-full rounded-lg text-sm',
        className
      )}
    >
      <ChevronUp
        className='cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-10 duration-300'
        color={toggle ? 'green' : 'white'}
        size={iconSize}
        strokeWidth={toggle ? 3 : 2}
        onClick={handleClick}
      />
      <div
        style={{ fontSize }}
        className='flex space-x-0 overflow-hidden rounded bg-transparent px-2 leading-none text-primary'
      >
        {deger > 9 || (value > 9 && <Digit place={10} value={value} />)}
        <Digit place={1} value={value} />
      </div>
    </div>
  );
};
function Digit({ place, value }: { place: number; value: number }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className='relative w-[1ch] tabular-nums'>
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function Number({ mv, number }: { mv: MotionValue; number: number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className='absolute inset-0 flex items-center justify-center'
    >
      {number}
    </motion.span>
  );
}

export default CustomVoteButton;
