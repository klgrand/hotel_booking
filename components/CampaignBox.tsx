'use client'

import React, { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { RoomDetailProps } from '@/types'
import { useSetMenuStateState } from '@/recoil/atoms/menu'

interface CampaignBoxProps extends RoomDetailProps {
  children?: ReactNode
  imgClassName?: string
  containerClassName?: string
}

const CampaignBox = (detail: CampaignBoxProps) => {
  const router = useRouter()
  const setMenu = useSetMenuStateState()

  const _onClick = () => {
    router.push('/hotels')
    setMenu('')
  }

  return (
    <div className={`campaign_box__container ${detail.containerClassName}`}>
      <div className={`campaign_box__img ${detail.imgClassName}`}>
        <Image
          src={`/${detail.list_img}`}
          alt={`${detail.list_img} alt`}
          width={198}
          height={173}
          className="object-cover"      
        />
      </div>
      <div className="campaign_box__content">
          {detail.children}
      </div>
      <div className='campaign_box__botton_container'>
        <div onClick={() => _onClick()} className="text__vertical text-white">
          Book Now
        </div>
      </div>
    </div>
  )
}

export default CampaignBox