'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { ITEM_PER_PAGE } from "@/lib/settings";
import Link from 'next/link'

export default function Pagination({ page, count }: { page: number; count: number }) {
  const router = useRouter();
  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;
  
  const changePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params}`);
  };

  return (
    <div className='flex items-center justify-between gap-4 text-gray-500'>
      <button 
        onClick={() => {changePage(page - 1);}} 
        type='button' 
        className='py-2 px-4 rounded-md bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed' 
        disabled={!hasPrev}
      >
        Prev
      </button>
      <ul className='flex items-center gap-2 text-sm' role='list'>
        {Array.from(
          { length: Math.ceil(count / ITEM_PER_PAGE) },
          (_, index) => {
            const pageIndex = index + 1;
            return (
              <li key={pageIndex}>
                <Link
                  href={`${window.location.pathname}?page=${pageIndex}`}
                  className={`px-2 rounded-sm ${
                    page === pageIndex ? "bg-imediusSky" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    changePage(pageIndex);
                  }}
                >
                  {pageIndex}
                </Link>
              </li>
            );
          }
        )}
      </ul>
      <button 
        onClick={() => {changePage(page + 1);}} 
        type='button'  
        className='py-2 px-4 rounded-md bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed'
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  )
}