"use client"
import React from 'react'
import {useRouter} from 'next/navigation'

export default function Signup_Btn() {
  const router=useRouter()
  return (
    <button onClick={()=> {router.push("/signup")}} 
        className='text-lg font-semibold text-white b-2-blue px-8 py-2 bg-[#387ed1] rounded-sm mt-6 hover:bg-blue-700'>
          Sign up for free
      </button>
  )
}
