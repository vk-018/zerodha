import React from 'react'
import Link from 'next/link'

export default function notFound() {
  return (
    <div className='px-4 md:px-40 flex flex-col justify-center item-center  h-[50dvh]'>
        <p className='text-5xl'>404</p>
        <p className='text-2xl'>Page not Found</p>
        <p className='text-2xl'>Visit <Link href="/" className="underline decoration-blue-500 text-blue-600">Home Page</Link></p>
    </div>
  )
}
