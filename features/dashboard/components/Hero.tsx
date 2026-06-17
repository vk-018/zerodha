   
import React from 'react'

import Image from 'next/image';
import Signup_Btn from '@/components/ui/Signup_Btn';

export default function Hero() {
  
  return (
    <div className='px-4 md:max-w-5xl mx-auto flex items-center flex-col text-center px-5 pb-30'>  {/**ht must be there to center the div */}
      <div className='w-full h-[300px] relative sm:mb-15 sm:mt-15'>    {/*position relative bcoz fill stretches the image relative to nearest parent with pos: relative */}
        {/*image must have widht +ht or fill */}
        <Image 
          src="/landing.svg"
          alt="hero"
          fill
          className="object-contain"
        />
      </div>
      <p className='text-4xl font-semibold'>Invest in everything</p>
      <p className='text-2xl mt-3 mb-4 text-[#424242]'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
      <Signup_Btn/>
    </div>

  )
}
