import Signup_Btn from '@/components/ui/Signup_Btn'
import React from 'react'

export default function () {
  return (
    <div className='px-5 w-full md:w-8/10 mx-auto mt-28 flex flex-col items-center mb-20'>
        <p className='text-2xl font-semibold mb-6'>Open a Zerodha account</p>
        <p className='text-[#424242] text-lg mb-5'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <Signup_Btn/>
    </div>
  )
}
