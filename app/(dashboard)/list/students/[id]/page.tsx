import React from 'react'
import Image from 'next/image'
import { MdOutlineCalendarMonth, MdMail, MdLocalPhone } from "react-icons/md";
import BigCalendar from '@/components/BigCalendar';
import Announcement from '@/components/Announcement';
import Link from 'next/link';
import Performance from '@/components/Performance';
import { role } from '@/lib/data';
import FormModal from '@/components/FormModal';

export default function SingleStudentPage() {
  return (
    <div className='flex flex-col xl:flex-row flex-1 gap-4 p-4'>
      <div className="grid gap-4 w-full xl:w-2/3">
        <header className='flex flex-col lg:flex-row gap-4'>
          <article className='flex flex-1 gap-4 py-6 px-4 rounded-xl bg-imediusSky'>
            <div className="w-1/3">
              <Image className='h-36 circle-avatar w-36' src='/images/liza.jpg' width={144} height={144} alt='Liza Anasashvili' />
            </div>
            <div className="flex flex-col justify-between gap-4 w-2/3">
              <div className="flex items-center gap-2">
                <h2 className='text-xl font-semibold'>Liza Anasashvili</h2>
                {role === "admin" && <FormModal
                  table="student"
                  type="update"
                  data={{
                    id: 1,
                    username: "deanguerrero",
                    email: "deanguerrero@gmail.com",
                    password: "password",
                    firstName: "Dean",
                    lastName: "Guerrero",
                    phone: "+1 234 567 89",
                    address: "1234 Main St, Anytown, USA",
                    bloodType: "A+",
                    dateOfBirth: "2000-01-01",
                    sex: "female",
                    img: "/images/liza.jpg",
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
              <Image className='h-6 w-6' src='/images/singleBranch.png' width={24} height={24} alt='Grade' />
              <div className="">
                <h3 className='text-xl font-semibold'>6th</h3>
                <p className='text-sm text-gray-400'>Grade</p>
              </div>
            </article>
            <article className='flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] p-4 bg-white rounded-xl'>
              <Image className='h-6 w-6' src='/images/singleLesson.png' width={24} height={24} alt='Lessons' />
              <div className="">
                <h3 className='text-xl font-semibold'>18</h3>
                <p className='text-sm text-gray-400'>Lessons</p>
              </div>
            </article>
            <article className='flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] p-4 bg-white rounded-xl'>
              <Image className='h-6 w-6' src='/images/singleClass.png' width={24} height={24} alt='Class' />
              <div className="">
                <h3 className='text-xl font-semibold'>6<span className='uppercase'>a</span></h3>
                <p className='text-sm text-gray-400'>Class</p>
              </div>
            </article>
          </div>
        </header>
        <div className="h-[800px] p-4 rounded-xl bg-white">
          <h2 className="text-xl font-semibold">Student&apos;s Schedule</h2>
          <BigCalendar />
        </div>
      </div>
      <aside className='flex flex-col gap-8 w-full xl:w-1/3'>
        <div className="grid gap-2 p-4 rounded-xl bg-white">
          <header>
            <h2 className='text-xl font-semibold'>Shortcuts</h2>
          </header>
          <ul className='flex flex-wrap gap-4 text-xs text-gray-500'>
            <li><Link className='block p-3 rounded-md bg-imediusSkyLight' href='/'>Student&apos;s Lessons</Link></li>
            <li><Link className='block p-3 rounded-md bg-imediusPurpleLight' href={`/list/teachers?classesId=s{2}`}>Student&apos;s Teachers</Link></li>
            <li><Link className='block p-3 rounded-md bg-pink-50' href='/'>Students&apos;s Exams</Link></li>
            <li><Link className='block p-3 rounded-md bg-cyan-50' href='/'>Student&apos;s Assignments</Link></li>
            <li><Link className='block p-3 rounded-md bg-indigo-50' href='/'>Student&apos;s Results</Link></li>
          </ul>
        </div>
        <Performance />
        <Announcement />
      </aside>
    </div>
  )
}
