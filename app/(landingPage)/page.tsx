import React from 'react'
import Hero from '@/features/dashboard/components/Hero'
import Award from '@/features/dashboard/components/Award'
import Pricing from '@/features/dashboard/components/Pricing'
import Education from '@/features/dashboard/components/Education'
import Account_Opening from '@/features/dashboard/components/Account_Opening'
import Footer from '@/components/shared/Footer'

export default function page() {
  return (
    <div>
      
      <Hero/>
      <Award/>
      <Pricing/>
      <Education/>
      <Account_Opening/>
      
    </div>
  )
}
