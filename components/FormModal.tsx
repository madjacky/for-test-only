'use client'
import React, { useState } from 'react'
import dynamic from "next/dynamic";
import { IoIosAdd, IoIosClose } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />
};

export default function FormModal({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number | string;
}) {
  const [open, setOpen] = useState(false);
  const size = type === "create" ? "h-8 w-8" : "h-7 w-7";
  const backgroundColor = type === 'create' ? 'bg-imediusYellow' : type === 'update' ? 'bg-imediusSky' : 'bg-imediusPurple';
  const getIcon = () => {
    switch (type) {
      case 'create':
        return <IoIosAdd className="" />;
      case 'update':
        return <FaEdit className="text-white" />;
      case 'delete':
        return <RiDeleteBin6Line className="text-white" />;
    }
  }

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="flex flex-col gap-4 p-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button type='button' className="w-max self-center py-2 px-4 bg-red-500 text-white rounded-md border-none">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form not found!"
    );
  };
  return (
    <div>
      <>
        <button type='button' className={`flex items-center justify-center ${size} rounded-full ${backgroundColor}`} onClick={() => setOpen(true)}>
          {getIcon()}
        </button>
        {open && (
          <div className="absolute left-0 top-0 flex items-center justify-center w-screen h-screen z-50 bg-black bg-opacity-60">
            <div className="relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] p-4 rounded-md bg-white">
              <Form />
              <button type='button' className='absolute top-4 right-4 inline-flex items-center justify-center-4 cursor-pointer' onClick={() => setOpen(false)}>
                <span className="sr-only">Close Modal window</span>
                <IoIosClose size={32} />
              </button>
            </div>
          </div>
        )}
      </>
    </div>
  )
}
