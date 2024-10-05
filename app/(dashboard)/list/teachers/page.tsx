import React from 'react'
import { role } from '@/lib/data';
import TableSearch from '@/components/TableSearch'
import { VscSettings } from "react-icons/vsc";
import { FaSortAmountDown } from "react-icons/fa";
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import Image from 'next/image';
import Link from 'next/link';
import { BiShow } from "react-icons/bi";
import FormModal from '@/components/FormModal';
import { Class, Prisma, Subject, Teacher } from '@prisma/client';
import prisma from '@/lib/prisma';
import { ITEM_PER_PAGE } from '@/lib/settings';

type TeacherList = Teacher & { subjects: Subject[] } & { classes: Class[] };

const columns = [
  {
    header: "Info", 
    accessor: 'info',
  },
  {
    header: "Teacher ID", 
    accessor: 'teacherId', 
    className: "hidden md:table-cell"
  },
  {
    header: "Subjects", 
    accessor: 'subjects', 
    className: "hidden md:table-cell"
  },
  {
    header: "Classes", 
    accessor: 'classes', 
    className: "hidden md:table-cell"
  },
  {
    header: "Phone", 
    accessor: 'phone', 
    className: "hidden lg:table-cell"
  },
  {
    header: "Address", 
    accessor: 'address', 
    className: "hidden lg:table-cell"
  },
  {
    header: "Actions", 
    accessor: 'actions', 
  },
]

const renderRow = (item: TeacherList) => {
  return (
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-imediusPurpleLight'>
      <td className='flex items-center gap-4 p-4'>
        <Image className='h-10 w-10 circle-avatar' src={item.img || "/images/noAvatar.png"} width={48} height={48} alt={item.name} />
        <div className="flex flex-col gap-1">
          <h3 className='font-semibold'>{item.name}</h3>
          <span className='text-xs text-gray-500'>{item?.email}</span>
        </div>
      </td>
      <td className='hidden md:table-cell'>{item.username}</td>
      <td className='hidden md:table-cell'>{item.subjects.map(subject => subject.name).join(',')}</td>
      <td className='hidden md:table-cell'>{item.classes.map(classItem => classItem.name).join(',')}</td>
      <td className='hidden md:table-cell'>{item.phone}</td>
      <td className='hidden md:table-cell'>{item.address}</td>
      <td className=''>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`} className='flex items-center justify-center h-7 w-7 rounded-full bg-imediusSky'>
            <BiShow className='text-white' size={16} />
            <span className='sr-only'>Show Selected Teacher Single Page</span>
          </Link>
          {role === 'admin' && (
            <FormModal table='teacher' type='delete' id={item.id} />
          )}
        </div>
      </td>
    </tr>
  )
}

export default async function TeacherListPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {

  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;
  const query: Prisma.TeacherWhereInput = {};
  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "classId":
            query.lessons = {
              some: {
                classId: parseInt(value),
              },
            };
            break;
          case "search":
            query.name = { contains: value, mode: "insensitive" };
            break;
          default:
            break;
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.teacher.findMany({
      where: query,
      include: {
        subjects: true,
        classes: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.teacher.count({ where: query }),
  ]);
  console.log(data);

  return (
    <div className='flex flex-col gap-4 flex-1 m-4 mt-0 p-4 rounded-xl bg-white'>
      <header className='flex items-center justify-between'>
        <h2 className='hidden md:block text-lg font-semibold'>All Teachers</h2>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center self-end gap-4">
            <button className='flex items-center justify-center h-8 w-8 p-2 rounded-full bg-imediusYellow' type='button'>
              <VscSettings size={14} />
              <span className="sr-only">Edit button</span>
            </button>
            <button className='flex items-center justify-center h-8 w-8 p-2 rounded-full bg-imediusYellow' type='button'>
              <FaSortAmountDown size={14} />
              <span className="sr-only">Sort button</span>
            </button>
            {role === 'admin' && (
              <FormModal table='teacher' type='create' />
            )}
          </div>
        </div>
      </header>
      <Table columns={columns} renderRow={renderRow} data={data} />
      <Pagination page={p} count={count} />
    </div>
  )
}