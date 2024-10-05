import React from 'react'
import { FieldError } from "react-hook-form";

type InputFieldProps = {
  label: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export default function InputField({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: InputFieldProps) {
  return (
    <label className='flex flex-col gap-2 w-full md:w-1/4'>
      <span className='text-xs text-gray-500'>{label}</span>
      <input type={type} {...register(name)} {...inputProps} defaultValue={defaultValue} className='w-full p-2 rounded-md ring-1 ring-gray-300 text-sm' />
      {error?.message && (
        <p className="text-xs text-red-500">{error.message.toString()}</p>
      )}
    </label>
  )
}