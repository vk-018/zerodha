"use client"
import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

export default function AccountOpen() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset(); // clears form after submit
  };


  return (
    <div className="px-4 lg:px-40 pt-24 flex flex-col justify-center items-center mb-32">
      <div className='flex flex-col justify-center items-center mb-16 text-center'>
        <p className='text-3xl font-medium mb-5'>Open a free demat and trading account online</p>
        <p className='text-xl text-[#666]'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
      </div>
      <div className='w-full flex justify-center flex-col md:flex-row'>
        <div className="md:w-5/10 w-8/10 mx-auto md:mr-12">
          <Image
            src="/account_open.svg"
            alt="Account Open"
            width={1}
            height={1}    /**this is for making the image sq */
            className="w-full h-auto"
            priority
          />
        </div>
        <div className='flex flex-col md:w-3/10 w-8/10 mx-auto md:ml-4 pt-8'>
          <p className='text-2xl font-medium mb-3'>Signup now</p>
          <p className='text-[#666] text-lg mb-3'>Or track your existing application</p>

          <form onSubmit={handleSubmit(onSubmit)}>

            <input 
              type='text'
              placeholder='Enter your mobile number'
              {...register("MobileNo", 
                { required: "Phone Number is required",
                pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit number",
                },
              })}
              className='p-4 border rounded-md w-full text-lg mb-6'
            />
            {errors.MobileNo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.MobileNo.message as string}
              </p>
            )}
            <button type='submit' className='block text-center px-4 py-2 w-7/10 bg-blue-500 text-white text-lg font-medium rounded-sm mb-8'>Signin</button>
          </form>

          <p className='text-xs'>By proceeding, you agree to the Zerodha terms & privacy policy</p>
        </div>
      </div>
    </div>
  )
}
