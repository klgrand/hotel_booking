'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { PaymentDetailProps } from '@/types'

const PaymentDetail = (item: PaymentDetailProps) => {
  const router = useRouter()
  const _onCLick = () => {
    router.push('/payment/done')
  }
  return (
    <div>
      <div className="flex items-center pl-[37px] mb-[31px]">
        <div className="mr-[19px]">
          <Image
            src={`/${item.method_img}`}
            alt={`${item.method_img} logo`}
            width={59}
            height={59}
          />
        </div>
        <div>
          {item.method}
        </div>
      </div>
      {item?.channel &&
        <div
          className="flex justify-between items-center border rounded-[17px] border-primary-color mx-[37px] mb-[31px] px-[27px] lg:w-[605px] h-[109px] cursor-pointer"
          onClick={_onCLick}
        >
          <div className="flex items-center">
            <div className="mr-[19px]">
              <Image
                src={`/${item.channel_img}`}
                alt={`${item.method_img} logo`}
                width={59}
                height={59}
              />
            </div>
            <div>
              {item.channel}
            </div>
          </div>
          <div>
            <Image
              src="/go_icon.png"
              alt="go icon"
              width={9}
              height={18}
            />
          </div>
        </div>
      }
    </div>
  )
}

export default PaymentDetail