import React from 'react'
import Link from 'next/link';

export default function Announcement() {
  return (
    <div className='grid gap-4 p-4 rounded-xl bg-white'>
      <header className='flex items-center justify-between'>
        <h3 className='font-semibold text-xl'>Announcements</h3>
        <Link href='/' className='flex items-center justify-center text-xs text-gray-400'>View All</Link>
      </header>
      <div className="grid gap-4">
        <div className="grid gap-1 p-4 bg-imediusSkyLight rounded-xl">
          <header className='flex items-center justify-between'>
            <h3 className='font-medium'>Lorem ipsum dolor sit.</h3>
            <span className='px-2 py-1 rounded-md bg-white text-xs text-gray-400'>2025-01-01</span>
          </header>
          <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti repudiandae saepe rerum!</p>
        </div>
        <div className="grid gap-1 p-4 bg-imediusPurpleLight rounded-xl">
          <header className='flex items-center justify-between'>
            <h3 className='font-medium'>Lorem ipsum dolor sit amet.</h3>
            <span className='px-2 py-1 rounded-md bg-white text-xs text-gray-400'>2025-01-01</span>
          </header>
          <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti repudiandae saepe rerum!</p>
        </div>
        <div className="grid gap-1 p-4 bg-imediusYellowLight rounded-xl">
          <header className='flex items-center justify-between'>
            <h3 className='font-medium'>Lorem ipsum dolor sit.</h3>
            <span className='px-2 py-1 rounded-md bg-white text-xs text-gray-400'>2025-01-01</span>
          </header>
          <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti repudiandae saepe rerum!</p>
        </div>
      </div>
    </div>
  )
}
