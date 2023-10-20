'use client'

import React from 'react'
import Image from 'next/image'
import Input from '@/components/SearchInput'
import SearchForm from '@/components/SearchForm'
import RecentSearchList from '@/components/RecentSearchList'
import { SEARCH_PLACEHOLDER } from '@/constants'
import Button from '@/components/Button'


const Explore = () => {
  return (
    <div className="sublayout">
      <div className="sublayout_container__explore">
        <div className="explore_action__container">
          <div className="w-full">
            <Input
              name="search_explore"
              placeholder={SEARCH_PLACEHOLDER}
              className="input__search"
            />
          </div>
          <div className="explore_action__header">
            What Are You Looking For?
          </div>
          <div className="explore_action__icon_container">
            <div className="w-[78px] h-[78px] relative">
              <Image
                src="/hotel_icon.png"
                alt="hotel icon"
                width={78}
                height={78}
              />
              <div className='absolute left-1'>Hotels</div>
            </div>
            <div className="w-[51px] h-[39px] relative">
              <Image
                src="/flight_icon.png"
                alt="flight icon"
                width={51}
                height={39}
              />
              <div className='absolute left-1 top-[55px]'>Flight</div>
            </div>
            <div className="w-[46px] h-[36px] relative">
              <Image
                src="/car_icon.png"
                alt="car icon"
                width={46}
                height={36}
              />
              <div className='absolute left-2 top-[52px]'>Car</div>
            </div>
          </div>
          <SearchForm containerClassName="explore_action__form_container" />
          <div>
            <RecentSearchList />
          </div>
        </div>
        <div className="explore_img__container">
          <div className="background-gradient" />
          <div className="absolute flex flex-col bottom-[131px] left-[41px]">
            <div className="text-[63px] font-medium leading-[84px] text-white mb-[14px]">
              Incredible India
            </div>
            <div className="text-[33px] font-medium leading-[42px] text-white">
              "For where the treasure is,"
            </div>
            <div className="text-[33px] font-medium leading-[42px] text-white text-right mb-[41px]">
              "there also will the heart be."
            </div>
            <div>
              <Button label="Take Tour" labelClassName="text-white" className="btn__take_tour" />
            </div>
          </div>
          <Image
            src="/explore_img.png"
            alt="explore image"
            width={983}
            height={1080}
          />
        </div>
        
      </div>
    </div>
  )
}

export default Explore