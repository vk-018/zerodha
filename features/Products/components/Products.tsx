import React from 'react'
import Image from 'next/image'

export default function () {
  return (
    <div className='mx-auto px-8 flex flex-col gap-10 items-center mt-16 mb-32 lg:max-w-8/10'>
        <div className='text-center mb-16'>
            <p className='text-3xl mb-4 text-[#666]'>Zerodha Products</p>
            <p className='text-lg'>Sleek, modern, and intuitive trading platforms</p>
        </div>

        <div className='md:flex md:justify-between'>
            <div className='w-full min-w-[200px] max-w-[500px] mx-auto'> 
                <Image
                 src="/products-kite.png"
                 alt="products-kite"
                 width={500}
                 height={300}
                 className='w-full h-auto'
                />
            </div>
            <div className='md:w-3/10 md:p-4'>
                <p className='text-xl font-bold mb-4'>Kite</p>
                <p className='md:text-lg'>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
            </div>
        </div>

        <div className='md:flex md:justify-around'>
            <div className='w-full min-w-[200px] max-w-[500px] mx-auto'> 
                <Image
                 src="/products-console.png"
                 alt="products-kite"
                 width={500}
                 height={300}
                 className='w-full h-auto'
                />
            </div>
            <div className='md:pt-30 md:w-3/10 md:p-4'>
                <p className='text-xl font-bold mb-4'>Console</p>
                <p>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
            </div>
        </div>

        <div className='md:flex md:justify-around'>
            <div className='w-full min-w-[200px] max-w-[500px] mx-auto'> 
                <Image
                 src="/products-coin.png"
                 alt="products-kite"
                 width={500}
                 height={300}
                 className='w-full h-auto'
                />
            </div>
            <div className='md:pt-20 md:w-3/10 md:p-4'>
                <p className='text-xl font-bold mb-4'>Coin</p>
                <p>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>
            </div>
        </div>

        <div className='md:flex md:justify-around'>
            <div className='w-full min-w-[200px] max-w-[500px] mx-auto'> 
                <Image
                 src="/landing-products.svg"
                 alt="products-kite"
                 width={500}
                 height={300}
                 className='w-full h-auto'
                />
            </div>
            <div className='md:pt-20 md:w-3/10 md:p-4'>
                <p className='text-xl font-bold mb-4'>Kite Connect API</p>
                <p>Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.</p>
            </div>
        </div>

        <div className='md:flex md:justify-around'>
            <div className='w-full min-w-[200px] max-w-[500px] mx-auto'> 
                <Image
                 src="/varsity-products.svg"
                 alt="products-kite"
                 width={500}
                 height={300}
                 className='w-full h-auto'
                />
            </div>
            <div className='md:pt-20 md:w-3/10 md:p-4'>
                <p className='text-xl font-bold mb-4'>Varsity mobile</p>
                <p>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>
            </div>
        </div>
    </div>
  )
}