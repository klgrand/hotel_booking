'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/Button'

const PaymentStatus = () => {
  const router = useRouter()

  const _onClick = () => {
    router.push('/')
  }

  return (
    <div className="w-full flex flex-col items-center justify-center pt-10">
      <div className="md:max-w-[638px] md:max-h-[480px] mb-[47px] max-w-[160px] max-h-[120px]">
        <Image
          src="/success_logo.png"
          alt={`success status logo`}
          width={638}
          height={480}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-[48px] font-medium text-center text-primary-color mb-[11px]">
          Booking Successfully completed
        </div>
        <div className="mb-[51px] text-[20px] font-light text-center">
          Your trip schedule is ready, please check under profile.
        </div>
        <Button onClick={_onClick} label="Home" className='btn__primary' labelClassName='btn__primary_text' />
      </div>
    </div>
  )
}

export default PaymentStatus