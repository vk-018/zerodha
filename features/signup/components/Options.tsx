import React from 'react'
import Image from 'next/image'
export default function 
() {
  return (
  <div className='text-center px-6 mx-auto mx-auto mb-32 md:max-w-8/10 ' >
    <p className='mb-12 text-2xl font-semi-bold'>Investment options with Zerodha demat account</p>
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
      <div className='flex'>
        <div className='w-15 m-4 md:w-30'>
          <Image
            src="/stocks-acop.svg"
            alt="Stock"
            height={1}
            width={1}
            className='w-full h-auto'
          ></Image>
        </div>
        <div className='text-left pt-2'>
            <p className='text-xl font-bold mb-2 text-[#666]'>Stocks</p>
            <p>Invest in all exchange-listed securities</p>
        </div>
      </div>
      <div className='flex'>
        <div className='w-15 m-4 md:w-30'>
          <Image
            src="/mf-acop.svg"
            alt="Stock"
            height={1}
            width={1}
            className='w-full h-auto'
          ></Image>
        </div>
        <div className='text-left pt-2'>
            <p className='text-xl font-bold mb-2 text-[#666]'>Mutual funds</p>
            <p>Invest in all exchange-listed securities</p>
        </div>
      </div>
      <div className='flex'>
        <div className='w-15 m-4 md:w-30'>
          <Image
            src="/ipo-acop.svg"
            alt="Stock"
            height={1}
            width={1}
            className='w-full h-auto'
          ></Image>
        </div>
        <div className='text-left pt-2'>
            <p className='text-xl font-bold mb-2 text-[#666]'>IPO</p>
            <p>Invest in all exchange-listed securities</p>
        </div>
      </div>
      <div className='flex'>
        <div className='w-15 m-4 md:w-30'>
          <Image
            src="/fo-acop.svg"
            alt="Stock"
            height={1}
            width={1}
            className='w-full h-auto'
          ></Image>
        </div>
        <div className='text-left pt-2'>
            <p className='text-xl font-bold mb-2 text-[#666]'>Futures & options</p>
            <p>Invest in all exchange-listed securities</p>
        </div>
      </div>
    </div>
    <button type='submit' className='block text-center px-4 py-2 w-60 bg-blue-500 text-white text-lg font-medium rounded-sm mt-20 mx-auto'>Explore Investments</button>
   </div>
  )
}
