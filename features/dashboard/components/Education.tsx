
import React from 'react'
import Image from 'next/image'

export default function Education() {
  return (
    <div className='px-4 w-full md:w-8/10 mx-auto md:flex justify-between items-center mt-16'>
        <div className='relative h-[350] w-8/10 md:w-4/10 mb-8'>
            <Image
                src="/index-education.svg"
                alt="Education"
                fill
            >
            </Image>
        </div>
        <div className='w-full md:w-5/10'>
            <p className='text-2xl font-semibold mb-8'>Free and open market education</p>
            <p className='text-base mb-4 text-[#424242]'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <p className='text-base mb-4 text-[#424242]'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
        </div>
    </div>
  )
}
