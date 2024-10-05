import React from 'react'
import Announcement from '@/components/Announcement'
import EventCalendar from '@/components/EventCalendar'
import BigCalendar from '@/components/BigCalendar'

export default function StudentPage() {
  return (
    <div className='flex flex-col xl:flex-row gap-4 p-4'>
      <div className=" w-full xl:w-2/3">
        <div className="h-full p-4 rounded-xl bg-white">
          <header>
            <h2 className='text-xl font-semibold'>Schedule <span className='uppercase'>(4a)</span></h2>
          </header>
          <BigCalendar />
        </div>
      </div>
      <aside className='grid gap-8 w-full xl:w-1/3'>
        <EventCalendar />
        <Announcement />
      </aside>
    </div>
  )
}
