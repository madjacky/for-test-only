import Announcement from '@/components/Announcement'
import AttendanceChart from '@/components/AttendanceChart'
import CountChart from '@/components/CountChart'
import EventCalendar from '@/components/EventCalendar'
import FinanceChart from '@/components/FinanceChart'
import UserCard from '@/components/UserCard'
import React from 'react'

export default function AdminPage() {
  return (
    <div className='flex flex-col md:flex-row gap-4 p-4'>
      <div className="grid gap-8 w-full lg:w-2/3">
        <div className="flex flex-wrap justify-between gap-4">
          <UserCard type='student' />
          <UserCard type='teacher' />
          <UserCard type='parent' />
          <UserCard type='staff' />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="h-[450px] w-full lg:w-1/3">
            <CountChart />
          </div>
          <div className="h-[450px] w-full lg:w-2/3">
            <AttendanceChart />
          </div>
        </div>
        <div className="h-[500px] w-full">
          <FinanceChart />
        </div>
      </div>
      <aside className='grid gap-8 w-full lg:w-1/3'>
        <EventCalendar />
        <Announcement />
      </aside>
    </div>
  )
}