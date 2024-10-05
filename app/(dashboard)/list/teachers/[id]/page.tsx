import React from 'react'
import Image from 'next/image'
import { MdOutlineCalendarMonth, MdMail, MdLocalPhone } from "react-icons/md";
import BigCalendar from '@/components/BigCalendar';
import Announcement from '@/components/Announcement';
import Link from 'next/link';
import Performance from '@/components/Performance';
import { role } from '@/lib/data';
import FormModal from '@/components/FormModal';

export default function SingleTeacherPage() {
  return (
    <div className='flex flex-col xl:flex-row flex-1 gap-4 p-4'>
      <div  className="grid gap-4 w-full xl:w-2/3">
        <header className='flex flex-col lg:flex-row gap-4'>
          <article className='flex flex-1 gap-4 py-6 px-4 rounded-xl bg-imediusSky'>
            <div className="w-1/3">
              <Image className='h-36 circle-avatar w-36' src='/images/imeda.jpg' width={144} height={144} alt='Imeda Iakovenko' />
            </div>
            <div className="flex flex-col justify-between gap-4 w-2/3">
              <div className="flex items-center gap-2">
                <h2 className='text-xl font-semibold'>Imeda Iakovenko</h2>
                {role === "admin" && <FormModal
                  table="teacher"
                  type="update"
                  data={{
                    id: 1,
                    username: "imedius",
                    email: "imedaiakovenko@gmail.com",
                    password: "password",
                    firstName: "Imeda",
                    lastName: "Iakovenko",
                    phone: "+995 557 45 45 53",
                    address: "Takaishvili St, Batumi, Georgia",
                    dateOfBirth: "1989-03-11",
                    sex: "male",
                    img: "/images/imeda.jpg",
                  }}
                />}
              </div>
              <p  className='text-sm text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="flex flex-wrap items-center justify-between gap-2 font-medium text-xs">
                <div className="flex 2xl:flex-shrink-0 items-center gap-2 w-full md:w-1/3 lg:w-full 2xl:w-[40%]">
                  <MdOutlineCalendarMonth size={14} />
                  <span>November 3</span>
                </div>
                <div className="flex 2xl:flex-shrink-0 items-center gap-2 w-full md:w-1/3 lg:w-full 2xl:w-1/2">
                  <MdMail size={14} />
                  <span>example@gmail.com</span>
                </div>
                <div className="flex 2xl:flex-shrink-0 items-center gap-2 w-full md:w-1/3 lg:w-full 2xl:w-[40%]">
                  <MdLocalPhone size={14} />
                  <span>+995 557 45 45 53</span>
                </div>
              </div>
            </div>
          </article>
          <div className="flex flex-wrap flex-1 justify-between gap-4">
            <article className='flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] p-4 bg-white rounded-xl'>
              <Image className='h-6 w-6' src='/images/singleAttendance.png' width={24} height={24} alt='Attendance' />
              <div className="">
                <h3 className='text-xl font-semibold'>90%</h3>
                <p className='text-sm text-gray-400'>Attendance</p>
              </div>
            </article>
            <article className='flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] p-4 bg-white rounded-xl'>
              <Image className='h-6 w-6' src='/images/singleBranch.png' width={24} height={24} alt='Branch' />
              <div className="">
                <h3 className='text-xl font-semibold'>2</h3>
                <p className='text-sm text-gray-400'>Branches</p>
              </div>
            </article>
            <article className='flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] p-4 bg-white rounded-xl'>
              <Image className='h-6 w-6' src='/images/singleLesson.png' width={24} height={24} alt='Lessons' />
              <div className="">
                <h3 className='text-xl font-semibold'>6</h3>
                <p className='text-sm text-gray-400'>Lessons</p>
              </div>
            </article>
            <article className='flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] p-4 bg-white rounded-xl'>
              <Image className='h-6 w-6' src='/images/singleClass.png' width={24} height={24} alt='Classes' />
              <div className="">
                <h3 className='text-xl font-semibold'>6</h3>
                <p className='text-sm text-gray-400'>Classes</p>
              </div>
            </article>
          </div>
        </header>
        <div className="h-[800px] p-4 rounded-xl bg-white">
          <h2 className="text-xl font-semibold">Teacher&apos;s Schedule</h2>
          <BigCalendar />
        </div>
      </div>
      <aside className='flex flex-col gap-8 w-full xl:w-1/3'>
        <div className="grid gap-2 p-4 rounded-xl bg-white">
          <header>
            <h2 className='text-xl font-semibold'>Shortcuts</h2>
          </header>
          <ul className='flex flex-wrap gap-4 text-xs text-gray-500'>
            <li><Link className='block p-3 rounded-md bg-imediusSkyLight' href='/'>Teacher&apos;s Classes</Link></li>
            <li><Link className='block p-3 rounded-md bg-imediusPurpleLight' href='/'>Teacher&apos;s Students</Link></li>
            <li><Link className='block p-3 rounded-md bg-pink-50' href='/'>Teacher&apos;s Lessons</Link></li>
            <li><Link className='block p-3 rounded-md bg-cyan-50' href='/'>Teacher&apos;s Events</Link></li>
            <li><Link className='block p-3 rounded-md bg-indigo-50' href='/'>Teacher&apos;s Assignments</Link></li>
          </ul>
        </div>
        <Performance />
        <Announcement />
      </aside>
    </div>
  )
}
