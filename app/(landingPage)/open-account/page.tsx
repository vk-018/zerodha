import React from 'react'
import AccountOpen from '@/features/signup/components/AccountOpen'
import Options from '@/features/signup/components/Options'
import Account_Opening from '@/features/dashboard/components/Account_Opening'

export default function Signup() {
  return (
    <div>
      <AccountOpen/>
      <Options/>
      <Account_Opening/>
    </div>
  )
}
