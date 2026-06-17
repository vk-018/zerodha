import React from 'react'


export default function About() {
  return (
    <div className='mx-auto px-8 lg:max-w-8/10 text-center mb-32'>
        <div className='mt-8 mb-16 md:mt-24 md:mb-24'>
            <p className='text-xl md:text-2xl font-bold md:text-[#666]'>We pioneered the discount broking model in India.  
                <br></br>
               Now, we are breaking ground with our technology.</p>
        </div>
        <div className='flex flex-col text-left gap-15 md:flex-row md:justify-around'>
            <div className='md:max-w-4/10'>
                <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier. </p><br></br>
                <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p><br></br>
                <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p> <br></br>
            </div>


            <div className='md:max-w-4/10'>
              <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors. </p><br></br>
              <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets. </p> <br></br>
              <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies. </p> <br></br>
            </div>
        </div>
    </div>
  )
}
