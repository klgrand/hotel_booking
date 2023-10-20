'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'
import { formatPrice } from '@/utils'
import Input from '@/components/SearchInput'
import SearchForm from '@/components/SearchForm'
import { SEARCH_PLACEHOLDER, CART_ROOM } from '@/constants'
import Button from '@/components/Button'


const Review = () => {
  const router = useRouter()

  const _onClick = () => {
    router.push('/payment')
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

        <div className="flex xl:flex-row flex-col justify-between w-full">
          <div className="w-full px-[20px] mb-[20px]">
            <div className="flex flex-col max-w-[956px]">
              <div>
                <div className="text-[24px] font-medium text-[#221f3c]">
                  Review your booking
                </div>
                <div className="flex justify-between flex-wrap-reverse">
                  <div>
                    <div className="flex flex-wrap items-center gap-[18px]">
                      <div className="text-[22px] font-normal text-primary-color">
                        {CART_ROOM.room_detail.name}
                      </div>
                      <Rating
                        SVGstyle={{ 'display': 'inline' }}
                        size={35}
                        initialValue={4}
                      />
                    </div>
                    <div className="text-[20px] font-normal text-[#00000040]">
                      {CART_ROOM.room_detail.description}
                      <div>
                        This hotel is reviewed by global firm
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[231px] max-h-[150px]">
                    <Image
                      src={`/${CART_ROOM.room_detail.list_img}`}
                      alt={CART_ROOM.room_detail._key}
                      width={231}
                      height={150}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap min-h-[113px] mt-[31px] mb-[32px] border-none bg-primary-light-color rounded-[15px]">
                <div className="flex flex-wrap md:basis-1/2 basis-none justify-evenly items-center">
                  <div className="flex flex-col flex-wrap">
                    <div className="text-[16px] font-normal text-[#00000040]">
                      Check-in
                    </div>
                    <div className="text-[20px] font-normal">
                      Sunday 21, Dec
                    </div>
                    <div className="text-[16px] font-normal text-[#00000040]">
                      10am
                    </div>
                  </div>
                  <div>
                    <Button className="bg-[#b7bcf3] rounded-[4px] px-[40px] pt-[14px] pb-[12px]" labelClassName="text-primary-color" label={`${CART_ROOM.day} night`}/>
                  </div>
                </div>
                <div className="flex md:basis-1/2 basis-none justify-evenly items-center">
                  <div className="flex flex-col flex-wrap">
                    <div className="text-[16px] font-normal text-[#00000040]">
                      Check-out
                    </div>
                    <div className="text-[20px] font-normal">
                      Sunday 22, Dec
                    </div>
                    <div className="text-[16px] font-normal text-[#00000040]">
                      10am
                    </div>
                  </div>
                  <div>
                    2 Adult - 1 room
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-[32px] max-w-[924px]">
              <div className="mb-[11px]">
                Guest Details
              </div>
              <div className="flex flex-wrap gap-[12px] max-w-[1000px] mb-[11px]">
                <div className="max-w-[456px] h-[52px] border rounded-[4px] w-full px-[20px] pt-[14px] pb-[12px]">
                  <input placeholder="First Name" />
                </div>
                <div className="max-w-[456px] h-[52px] border rounded-[4px] w-full px-[20px] pt-[14px] pb-[12px]">
                  <input placeholder="Last Name" />
                </div>
                <div className="max-w-[456px] h-[52px] border rounded-[4px] w-full px-[20px] pt-[14px] pb-[12px]">
                  <input placeholder="E-mail address" />
                </div>
                <div className="max-w-[456px] h-[52px] border rounded-[4px] w-full px-[20px] pt-[14px] pb-[12px]">
                  <input placeholder="Mobile number" />
                </div>
              </div>
              <div className="w-full">
                <div className="mb-[11px]">
                  Speacial Request(optional)
                </div>
                <div className="h-[192px] border rounded-[4px] w-full px-[20px] pt-[14px] pb-[12px]">
                  <input />
                </div>
              </div>
            </div>
            <div className="flex md:justify-start justify-center">
              <Button onClick={() => _onClick()} className="btn__primary md:w-[280px]" label="Continue" labelClassName="btn__primary_text" />
            </div>
          </div>
          <div className="md:w-[482px] w-full px-[20px] pb-[100px] flex flex-col">          
            <div className="flex flex-col gap-[11px]">
              <div className="flex justify-between items-center">
                <div className="text-[20px] font-normal text-[#00000040]">
                  {`1 room X ${CART_ROOM.day} night`}
                </div>
                <div className="text-[20px] font-normal text-[#b7bcf3]">
                  {formatPrice(CART_ROOM.price || 0 * CART_ROOM.day || 0, 2)}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[20px] font-normal text-[#00000040]">
                  Total discount
                </div>
                <div className="text-[20px] font-normal text-[#b7bcf3]">
                  {formatPrice(CART_ROOM.discount || 0, 2)}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[20px] font-normal text-[#00000040]">
                  Price after discount
                </div>
                <div className="text-[20px] font-normal text-[#b7bcf3]">
                  {formatPrice(CART_ROOM.price || 0, 2)}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[20px] font-normal text-[#00000040]">
                  Taxes & service fees
                </div>
                <div className="text-[20px] font-normal text-[#b7bcf3]">
                  {formatPrice(CART_ROOM.tax || 0, 2)}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[22px] font-bold text-[#221f3c]">
                  Total Amount
                </div>
                <div className="text-[22px] font-bold text-primary-color">
                  {formatPrice(CART_ROOM.price || 0 - (CART_ROOM.discount || 0 +( CART_ROOM.tax || 0)), 2)}
                </div>
              </div>
            </div>
            <div className="md:w-[482px] w-full mt-[31px] flex flex-col gap-[11px] border rounded-[15px] drop-shadow-5xl bg-white px-[18px] py-[16px]">
              <div className="text-[20px] font-medium text-[#221f3c]">
                Cancellation Charges
              </div>
              <div className="text-[18px] font-medium text-[#221f3c]">
                Non Refundable
              </div>
              <div className="text-[16px] font-medium text-[#00000040]">
                Penalty may be charged by airline && by MMT based on how close to depart date you cancel. View fare rules to know more.
              </div>
              <div className="text-[16px] font-medium text-[#00000040]">
                VIEW POLICY
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review