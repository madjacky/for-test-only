'use client'
import React from 'react'
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { IoIosMore } from "react-icons/io";
import Link from 'next/link';

const data = [
  { name: "Group A", value: 92, fill: "oklch(91.64% 0.046 222.59)" },
  { name: "Group B", value: 8, fill: "oklch(91.18% 0.125 96.42)" },
];

export default function Performance() {
  return (
    <article className='relative h-80 p-4 rounded-xl bg-white'>
      <header className='flex items-center justify-between'>
        <h2 className='text-xl font-semibold'>Performance</h2>
        <Link href='/' className='flex items-center justify-center'>
          <IoIosMore className='text-black' size={20} />
        </Link>
      </header>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="oklch(65.22% 0.124 284.59)"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 className="text-3xl font-bold">9.2</h3>
        <p className="text-xs text-gray-300">of 10 max LTS</p>
      </div>
      <footer className='absolute bottom-16 left-0 right-0 m-auto text-center'>
        <h3 className='font-medium'>1st Semester - 2nd Semester</h3>
      </footer>
    </article>
  )
}
