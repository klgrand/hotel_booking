import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/Button'
import { RoomDetailProps } from '@/types'

const Card = (room: RoomDetailProps) => {
  const router = useRouter()

  const _onClick = (key: string) => {
    router.push(`/hotels/${key}`)
  }

  return (
    <div className="card">
      <div className='max-w-[449px] max-h-[280px]'>
        <Image
          src={`/${room.list_img}`}
          alt={`${room.list_img} img`}
          width={449}
          height={280}
        />
      </div>
      <div className="flex w-full justify-between mt-[12px]">
        <div className="card__detail_container">
          <div className="card__title">
            {room.name}
          </div>
          <div className="card__description">
            {`price start from ${room.price}`}
          </div>
        </div>
        <Button onClick={() => _onClick(room._key)} label="View Details" className="card__btn_detail" />
      </div>
    </div>
  )
}

export default Card