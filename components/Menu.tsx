import React from 'react'
import { CiSearch } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { TfiAnnouncement } from "react-icons/tfi";
import Link from 'next/link';
import Image from 'next/image';

export default function Menu() {
  return (
    <div className='flex items-center justify-between p-4'>
      <label htmlFor="" className='hidden md:flex items-center gap-2 px-2 ring-[1.5px] ring-gray-300 rounded-full text-xs'>
        <CiSearch size={14} />
        <input className='w-[200px] p-2 bg-transparent outline-none' type="search" placeholder='Search...' />
      </label>
      <div className="flex items-center justify-end gap-6 w-full">
        <Link href='/' className="flex items-center justify-center w-7 h-7 rounded-full bg-white">
          <AiOutlineMessage size={20} />
        </Link>
        <Link href='/' className="relative flex items-center justify-center w-7 h-7 rounded-full bg-white">
          <TfiAnnouncement size={20} />
          <span className='absolute -top-3 -right-3 flex items-center justify-center w-5 h-5 rounded-full bg-purple-500 text-white text-xs'>2</span>
        </Link>
        <div className="flex gap-6">
          <div className="flex flex-col">
            <h3 className='text-xs font-medium leading-3'>Imeda Iakovenko</h3>
            <span className='text-[.625rem] text-right text-gray-500'>Admin</span>
          </div>
          <Link href='/' className="flex items-center justify-center w-9 h-9 rounded-full bg-white">
            <Image className='circle-avatar object-cover overflow-clip' src='/images/imeda.jpg' width={36} height={36} alt='Imeda Iakovenko' />
          </Link>
        </div>
      </div>
    </div>
  )
}
