import React from 'react'
import Image from 'next/image'
import { RECOMMENDED_LIST } from '@/constants'

const Recommended = () => {
  return (
    <div className="recommended">
      <div>
        Recommended
      </div>
      {RECOMMENDED_LIST.map((item) => (
        <div key={item._key} className="recommended__container">
          <div className='max-w-[256px] max-h-[123px]'>
            <Image
              src={`/${item.img}`}
              alt={`${item.img} img`}
              width={256}
              height={123}
            />
          </div>
          <div className="max-w-[256px]">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Recommended