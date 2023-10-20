import React from 'react'
import Image from 'next/image'


const ImageGallery = ({ imageList }: { imageList: string[] }) => {
  return (
    <div className="image_list__container">
      <div className="max-w-[680px] max-h-[448px]">
        <Image
          src={`/${imageList[0]}`}
          alt='0 img'
          width={680}
          height={448}
        />
      </div>
      <div className="flex flex-col gap-[12px] justify-between">
        <div className="max-w-[408px] max-h-[285px] hidden xl:block">
          <Image
            src={`/${imageList[1]}`}
            alt='1 img'
            width={408}
            height={285}
          />
        </div>
        <div className='flex gap-[12px]'>
          <div className="max-w-[199px] max-h-[151px]">
            <Image
              src={`/${imageList[2]}`}
              alt='2 img'
              width={199}
              height={151}
            />
          </div>
          <div className="max-w-[199px] max-h-[151px]">
            <Image
              src={`/${imageList[3]}`}
              alt='3 img'
              width={199}
              height={151}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery