import React from 'react'
import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'
import CampaignBox from './CampaignBox'
import { RECENTLY_SEARCH_LIST, RECENTLY_LOGO } from '@/constants'


const RecentSearchList = () => {
  return (
    <div className="recent_search__container">
      <div className="recent_search__title">
        Recent Searchs
      </div>
      {RECENTLY_SEARCH_LIST.map(item => (
        <div key={item._key}>
          <CampaignBox {...item} containerClassName="w-[692px] h-[173px]">
            <div className="flex flex-col justify-between pl-[34px] pr-[17px] py-[6px]">
              <div className="text-[18px] font-medium text-[#221f3c]">
                {item.name}
              </div>
              <div>
                <Rating
                  SVGstyle={{ 'display': 'inline' }}
                  size={15}
                  initialValue={4}
                />
              </div>
              <div className="flex gap-[16px]">
                <div className="flex gap-1 items-center bg-[#ff6969] border-none rounded-[14px] px-[9px] py-[6px] h-[22px]">
                  <div className="max-w-[10px] max-h-[10px]">
                    <Image
                      src="/rating_icon.png"
                      alt="rating icon"
                      width={10}
                      height={10}
                    />
                  </div>
                  <div className="text-[12px] text-white">4.9</div>
                </div>
                <div className="text-[14px] text-[#a8a8a8]">
                  {`1366 Reviews`}
                </div>
              </div>
              <div className="text-[14px] text-[#a8a8a8]">
                Amenities
              </div>
              <div className="flex">
                {RECENTLY_LOGO.map(item => (
                  <div key={item._key} className="max-w-[60px] max-h-[40px]">
                    <Image
                      src={`/${item.img}`}
                      alt={item._key}
                      width={60}
                      height={40}
                    />
                  </div>
                ))}
              </div>
              <div className="text-[16px] font-medium leading-[28px] text-primary-color">
                {`${item.price}/night`}
              </div>
            </div>
          </CampaignBox>
        </div>
      ))}
    </div>
  )
}

export default RecentSearchList