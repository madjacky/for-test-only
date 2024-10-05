'use client'
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Link from 'next/link';
import { IoIosMore } from "react-icons/io";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: 'Lorem, ipsum dolor.',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    title: 'Lorem, ipsum dolor.',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    title: 'Lorem, ipsum dolor.',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]

export default function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='grid gap-4 p-4 rounded-xl bg-white'>
      <Calendar onChange={onChange} value={value} />
      <header className='flex items-center justify-between'>
        <h3 className='font-semibold text-xl'>Events</h3>
        <Link href='/' className='flex items-center justify-center'>
          <IoIosMore className='text-black' size={20} />
        </Link>
      </header>
      <div className="grid gap-4">
        {events.map(event => (
          <div key={event.id} className="p-5 rounded-xl border-2 border-t-4 border-gray-100 odd:border-t-imediusSky even:border-t-imediusPurple">
            <header className='flex items-center justify-between'>
              <h3 className='font-semibold text-gray-600'>{event.title}</h3>
              <span className='text-xs text-gray-300'>{event.time}</span>
            </header>
            <p className="mt-2 text-sm text-gray-400">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}