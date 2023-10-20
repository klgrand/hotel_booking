'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'
import { formatPrice } from '@/utils'
import Input from '@/components/SearchInput'
import SearchForm from '@/components/SearchForm'
import CampaignBox from '@/components/CampaignBox'
import ImageGallery from '@/components/ImageGallery'
import { SEARCH_PLACEHOLDER, ROOM_DETAIL, RATING_LOGO, ROOM_CAMPAIGN_BOX } from '@/constants'
import Button from '@/components/Button'

const HotelRoom = () => {
  const router = useRouter()

  const _onClick = () => {
    router.push('/review')
  }

  return (
    <div className="sublayout relative">
      <div className="bg-[#F4F7FF] w-full h-[250px] absolute" />
      <div className="sublayout_container relative flex-col">
        <div className="w-full flex flex-col md:m-0 p-[20px]">
          <Input
            name="search_explore"
            placeholder={SEARCH_PLACEHOLDER}
            className="input__search "
          />
          <SearchForm
            horizontalForm
            containerClassName="flex xl:flex-row xl:justify-between xl:items-center flex-col items-center gap-[30px] mt-[34px] mb-[32px]"
          />
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col">
            <ImageGallery imageList={ROOM_DETAIL.detail_imgs}  />
            <div className="flex flex-wrap justify-between mt-[12px] gap-[12px] mb-[12px]">
              <div className="flex flex-col flex-wrap">
                <div className="text-[28px] font-normal text-[#221f3c]">
                  {ROOM_DETAIL.name}
                </div>
                <div className="text-[18px] font-normal text-[#b7bcf3]">
                  {ROOM_DETAIL.description}
                </div>
              </div>
              <Button
                onClick={() => _onClick()}
                className="border rounded-[4px] h-[52px] border-primary-color"
                labelClassName="text-primary-color pl-[40px]"
                label={`Price Start from ${ROOM_DETAIL.price} BAHT`}
              />
            </div>
            <div className="hidden flex-wrap xl:gap-[124px] gap-[24px] my-[38px] md:flex ">
              {ROOM_CAMPAIGN_BOX.map(item => (
                <div key={item._key}>
                  <CampaignBox {...item} containerClassName="w-[488px] h-[145px]">
                    <div className="flex flex-col pt-[25px] px-[15px]">
                      <div className="text-[14px] text-[#221f3c]">
                        {item.type}
                      </div>
                      <div className="text-[23px] font-bold  text-[#2d3ddf]">
                        {`${formatPrice(item.price, 0)} BAHT/night`}
                      </div>
                    </div>
                  </CampaignBox>
                </div>
              ))}
              
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-[32px] xl:justify-between justify-center  bg-white border rounded-[4px] drop-shadow-5xl px-[44px] py-[32px] w-full h-full xl:w-[481px] xl:h-[405px]">
              <div className="flex items-center gap-[21px]">
                <div className="relative max-w-[75px] max-h-[59px]">
                  <Image
                    src="/rating_result.png"
                    alt="rating result"
                    width={75}
                    height={59}
                  />
                  <div className="absolute top-[8px] left-[12px] text-white text-[28px]">8.4</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-[20px] font-medium text-[#221f3c]">
                    Excellent
                  </div>
                  <div className="text-[16px] font-medium text-[#b7bcf3]">
                    6879 Reviews
                  </div>
                </div>
              </div>
              <div className="flex gap-[18px]">
                <div className="flex flex-col">
                  <div>Housekeeping</div>
                  <div>Food</div>
                  <div>Service</div>
                  <div>Staff</div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <Rating
                      SVGstyle={{ 'display': 'inline' }}
                      size={20}
                      initialValue={4}
                    />
                  </div>
                  <div>
                    <Rating
                      SVGstyle={{ 'display': 'inline' }}
                      size={20}
                      initialValue={4}
                    />
                  </div>
                  <div>
                    <Rating
                      SVGstyle={{ 'display': 'inline' }}
                      size={20}
                      initialValue={4}
                    />
                  </div>
                  <div>
                    <Rating
                      SVGstyle={{ 'display': 'inline' }}
                      size={20}
                      initialValue={4}
                    />
                  </div>
                </div>

                

              </div>
              <div>
                <div className="text-[16px] font-normal text-[#221f3c]">
                  Services
                </div>
                <div className="flex gap-[19px] mt-[11px]">
                  {RATING_LOGO.map(item => (
                    <div key={item._key} className="max-w-[51px] max-h-[51px]">
                      <Image
                        src={`/${item.img}`}
                        alt={item._key}
                        width={51}
                        height={51}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-[22px] mt-[24px]">
              <div className="w-max-[25px] h-max-[27px]">
                <Image
                  src="/rating_star_icon.png"
                  alt="rating result"
                  width={25}
                  height={27}
                />
              </div>
              <div className="text-[20px] font-medium text-primary-color">
                This property is in highly demand today.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelRoom