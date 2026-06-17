"use client"      


import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {ShoppingCart, Bell, CircleUser } from 'lucide-react'

export default function DashNavbar() {

  const pathname = usePathname();     //can only be used with client component
  console.log(pathname);
  const titleMap = {
    "/dashboard": "Dashboard",
    "/holdings": "Holdings",
    "/positions": "Positions",
    "/funds" :   "Funds",
    "/orders" : "Orders"
   }

  return (
    <div className='px-4 py-3 flex justify-between items-center border-b border-gray-200 bg-white'>
        <div className='hidden md:flex justify-between flex w-[250]'>
          <div>
            <p>NIFTY 50</p>
            <p>1000</p>
          </div>
          <div>
            <p>SENSEX</p>
            <p>1500</p>
          </div>
        </div>
        <div className='relative h-6 w-6 flex justify-between gap-4'>
          <Link href="/dashboard">
            <Image
              src="/kite-logo.svg"
              alt="Kite Logo"
              fill
            >
            </Image>
          </Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard">Orders</Link>
          <Link href="/dashboard">Holdings</Link>
          <Link href="/dashboard">Positions</Link>
          <Link href="/dashboard">Bids</Link>
          <Link href="/dashboard">Funds</Link>
        </div>
        <div className='md:hidden'>
            <p className='font-medium text-gray-800 text-sm'>{titleMap[pathname]}</p>
        </div>
        <div>

        </div>

        <div className='flex gap-6 text-sm'>
          <div className='cursor-pointer hover:text-gray-900 transition-colors'><ShoppingCart size={18} /></div>
          <div className='cursor-pointer hover:text-gray-900 transition-colors'><Bell size={18} /></div>
          <div className='cursor-pointer hover:text-gray-900 transition-colors'><CircleUser size={18} /></div>
        </div>
    </div>
  )
}
