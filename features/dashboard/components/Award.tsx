import React from 'react'
import Image from 'next/image'
import { headings,para } from '@/styles/style'


export default function Award() {
  return (
    <div className='px-4 w-full md:w-9/10 mx-auto flex flex-col items-center'>   {/**both child are absolute they wont be considerin the flow */}
      <div className='md:flex md:justify-center'>
        <div className='w-full md:w-4/10'>
            <p className='text-2xl font-semibold mb-12'>Trust with confidence</p>

            <p className={headings}>Customer-first always</p>
            <p className={para}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

            <p className={headings}>No spam or gimmicks</p>
            <p className={para}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

            <p className={headings}>The Zerodha universe</p>
            <p className={para}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

            <p className={headings}>Do better with money</p>
            <p className={para}>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className='relative w-full md:w-5/10 h-[600px]'>
            <Image
                src="/ecosystem.png"
                alt="award"
                fill
            >
            </Image>
        </div>
      </div>
      <div className='w-5/10 relative h-[40] mt-8' >
        <Image
            src="/press-logos.png"
            alt="press"
            fill
        >
        </Image>
      </div>
    </div>
  )
}
