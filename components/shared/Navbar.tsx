"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Menu,X } from 'lucide-react'
import { useState } from 'react'



export default function Navbar() {
  const [state,setState]= useState<boolean>(false)
  
  
  return (
    <div className='shadow flex flex-col lg:flex-row justify-between py-6 px-4 lg:px-28 sticky top-0 z-50 bg-white'>
        <div className={`flex justify-between pt-1 lg:pb-0 ${state ? "border-b border-black pb-4" : ""} lg:border-none`}>
          <Link href="/">
            <Image 
               src="/logo.svg"
               alt='Logo'
               height={45}
               width={120}
               >
            </Image>
          </Link>
          <button onClick={()=> setState(prev => !prev)}  className='hover:cursor-pointer block lg:hidden'>{state ?<X/> : <Menu/>}</button>
        </div>
        {state   && 
        <div className='flex flex-col mt-4 gap-2'>
          <Link href="/open-account" className='shadow'>Signup</Link>
          <Link href="/about" className='shadow'>About</Link>
          <Link href="/products" className='shadow'>Products</Link>
          <Link href="/pricing" className='shadow'>Pricing</Link>
          <Link href="/support" className='shadow'>Support</Link>
        </div>
        }

        <div className='hidden lg:flex justify-between w-4/10 text-[#666]'>
          <Link href="/open-account">Signup</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/support">Support</Link>
        </div>
    </div>
  )
}
