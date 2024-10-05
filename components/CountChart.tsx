'use client'
import React from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import Link from 'next/link';
import { IoIosMore } from "react-icons/io";
import Image from 'next/image';

const data = [
  {
    name: 'Total',
    count: 106,
    fill: 'oklch(100% 0 0)',
  },
  {
    name: 'Girls',
    count: 53,
    fill: 'oklch(92.43% 0.115 95.75)',
  },
  {
    name: 'Boys',
    count: 53,
    fill: 'oklch(90.14% 0.055 230.9)',
  },
];
export default function CountChart() {
  return (
    <div className='h-full w-full p-4 rounded-xl bg-white'>
      <header className='flex items-center justify-between'>
        <h3 className='font-semibold text-xl'>Students</h3>
        <Link href='/' className='flex items-center justify-center'>
          <IoIosMore className='text-black' size={20} />
        </Link>
      </header>
      <div className="relative h-[75%] w-full">
        <ResponsiveContainer>
          <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
            <RadialBar
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='/images/malefemale.png' width={50} height={50} alt='Male & Female' />
      </div>
      <footer className='flex justify-center gap-16'>
        <div className="grid justify-items-center gap-1">
          <div className="h-5 w-5 rounded-full bg-imediusSky">
            <span className="sr-only">decorative circle</span>
          </div>
          <span className='font-bold'>1,234</span>
          <span className='text-xs text-green-300'>Boys (55%)</span>
        </div>
        <div className="grid justify-items-center gap-1">
          <div className="h-5 w-5 rounded-full bg-imediusYellow">
            <span className="sr-only">decorative circle</span>
          </div>
          <span className='font-bold'>1,234</span>
          <span className='text-xs text-green-300'>Girls (45%)</span>
        </div>
      </footer>
    </div>
  )
}
