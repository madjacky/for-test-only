'use client'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Link from 'next/link';
import { IoIosMore } from "react-icons/io";

const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Feb',
    income: 3000,
    expense: 1398,
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 9800,
  },
  {
    name: 'Apr',
    income: 2780,
    expense: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    income: 1890,
    expense: 4800,
  },
  {
    name: 'Jun',
    income: 2390,
    expense: 3800,
  },
  {
    name: 'Jul',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Aug',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Sep',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Oct',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Now',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Dec',
    income: 3490,
    expense: 4300,
  },
];

export default function FinanceChart() {
  return (
    <div className='h-full w-full p-4 rounded-xl bg-white'>
      <header className='flex items-center justify-between'>
        <h3 className='font-semibold text-xl'>Finance</h3>
        <Link href='/' className='flex items-center justify-center'>
          <IoIosMore className='text-black' size={20} />
        </Link>
      </header>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='oklch(92.76% 0.006 264.53)' />
          <XAxis axisLine={false} dataKey="name" tick={{fill:"oklch(92.76% 0.006 264.53)"}} tickLine={false} tickMargin={10} />
          <YAxis axisLine={false} tick={{fill:"oklch(92.76% 0.006 264.53)"}} tickLine={false} tickMargin={20} />
          <Tooltip />
          <Legend align='center' verticalAlign='top' wrapperStyle={{paddingBlock:"10px 30px"}} />
          <Line type="monotone" dataKey="expense" stroke="#bae6fd" strokeWidth={5} />
          <Line type="monotone" dataKey="income" stroke="#fde68a" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
