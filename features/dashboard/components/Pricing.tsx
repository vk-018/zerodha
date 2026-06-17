
import React from 'react'
import Image from 'next/image'
import { headings,para } from '@/styles/style'

export default function() {
  return (
    <div className='px-4 w-full md:w-8/10 mx-auto md:flex md:justify-center mt-32'>
        <div className='w-full md:w-3/10'>
            <p className='text-2xl font-semibold mb-8'>Unbeatable Pricing</p>
            <p className={para}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
        </div>
        <div className='relative w-full md:w-7/10 flex justify-between flex-col sm:flex-row flex-wrap'>
          <div className='flex sm:justify-center items-center w-[220]'>
            <Image
                src="/pricing-eq_zero.svg"
                alt="award"
                height={110}
                width={150}
            >
            </Image>
            <p className='text-xs'>Free account <br></br> opening</p>
          </div>
          <div className='flex sm:justify-center items-center w-[280]'>
            <Image
                src="/pricing-eq_zero.svg"
                alt="award"
                height={120}
                width={150}
            >
            </Image>
            <p className='text-xs'>Free equity delivery <br></br> and direct mutual funds</p>
          </div>
          <div className='flex sm:justify-center items-center w-[220]'>
            <Image
                src="/other-trades_twenty.svg"
                alt="award"
                height={120}
                width={150}
            >
            </Image>
            <p className='text-xs'>Intraday and <br></br> F&O</p>
          </div>
        </div>
    </div>
    
  )
}
