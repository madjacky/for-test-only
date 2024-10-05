'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

import { CiSearch } from "react-icons/ci";

export default function TableSearch() {

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = (e.currentTarget[0] as HTMLInputElement).value;

    const params = new URLSearchParams(window.location.search);
    params.set("search", value);
    router.push(`${window.location.pathname}?${params}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="" className='flex items-center gap-2 w-full md:w-auto px-2 ring-[1.5px] ring-gray-300 rounded-full text-xs'>
        <CiSearch size={14} />
        <input className='w-[200px] p-2 bg-transparent outline-none' type="search" placeholder='Search...' />
      </label>
    </form>
  )
}