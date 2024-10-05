'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AiOutlineCloudUpload } from "react-icons/ai";
import InputField from '../InputField';

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  birthday: z.date({ message: "Birthday is required!" }),
  sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

type Inputs = z.infer<typeof schema>;

export default function TeacherForm({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit = handleSubmit((data: Inputs) => {
    console.log(data);
  });
  return (
    <form className='flex flex-col gap-8' onSubmit={onSubmit}>
      <h2 className='text-xl font-semibold'>Create a new teacher</h2>
      <div className="grid gap-6">
        <span className='font-medium text-xs text-gray-400'>Authentication Information</span>
        <div className="flex flex-wrap justify-between gap-4">
          <InputField label="Username" name="username" defaultValue={data?.username} register={register} error={errors?.username} />
          <InputField label="Email" name="email" defaultValue={data?.email} register={register} error={errors?.email} />
          <InputField label="Password" name="password" type="password" defaultValue={data?.password} register={register} error={errors?.password} />
        </div>
      </div>
      <div className="grid gap-6">
        <span className='font-medium text-xs text-gray-400'>Authentication Information</span>
        <div className="flex flex-wrap justify-between gap-4">
          <InputField label="First Name" name="firstName" defaultValue={data?.firstName} register={register} error={errors.firstName} />
          <InputField label="Last Name" name="lastName" defaultValue={data?.lastName} register={register} error={errors.lastName} />
          <InputField label="Phone" name="phone" defaultValue={data?.phone} register={register} error={errors.phone} />
          <InputField label="Address" name="address" defaultValue={data?.address} register={register} error={errors.address} />
          <InputField label="Birthday" name="birthday" type="date" defaultValue={data?.birthday} register={register} error={errors.birthday} />
          <label className='flex flex-col gap-2 w-full md:w-1/4'>
            <span className='text-xs text-gray-500'>Sex</span>
            <select className='w-full p-2 rounded-md ring-1 ring-gray-300 text-sm' {...register("sex")} defaultValue={data?.sex}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.sex?.message && (
              <p className="text-xs text-red-500">
                {errors.sex.message.toString()}
              </p>
            )}
          </label>
          <label htmlFor='upload' className='flex flex-col items-center justify-center gap-2 mx-auto w-full md:w-1/4 cursor-pointer'>
            <AiOutlineCloudUpload size={28} />
            <span className='text-xs text-gray-500'>Upload a photo</span>
            <input type="file" id="upload" {...register("img")} className="hidden" />
            {errors.img?.message && (
              <p className="text-xs text-red-500">
                {errors.img.message.toString()}
              </p>
            )}
          </label>
        </div>
      </div>
      <button type='submit' className='inline-block text-center py-2 px-4 rounded-md bg-blue-400 hover:bg-blue-500 active:bg-blue-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300 text-white'>{type === "create" ? "Create" : "Update"}</button>
    </form>
  )
}
