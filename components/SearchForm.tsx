'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import DatePicker from 'react-datepicker'
import Button from '@/components/Button'
import { useSetMenuStateState } from '@/recoil/atoms/menu'

import Select from 'react-select'

import { useForm, Controller } from 'react-hook-form'

import { PeoploOptionType } from '@/types'

interface SearchFormProps {
  containerClassName?: string
  horizontalForm?: boolean
}

interface FormValues {
  start_date: Date
  end_date: Date
  location: string
  people: string
}

const options: PeoploOptionType[] = [
  { value: "1", label: "1 adult, 0 children - 1 rooms" },
  { value: "2", label: "1 adult, 0 children - 1 rooms" },
  { value: "3", label: "1 adult, 0 children - 1 rooms" }
]

const SearchForm = (props: SearchFormProps) => {

  const router = useRouter()
  const { register, control, handleSubmit, formState: { errors } } = useForm<FormValues>()
  const setMenu = useSetMenuStateState()

  const onSubmit = handleSubmit((data) => {
    router.push('/hotels')
    setMenu('')
  })

  return (
    <form onSubmit={onSubmit}>
    <div className={props.containerClassName}>
      <div className={props?.horizontalForm ? `input__search_list_container ${errors?.location ? "error__input" : ""}` : `input__search_list_container mb-[14px] mt-[31px] ${errors?.location ? "error__input" : ""}`}>
        {!props?.horizontalForm && <div className="py-[14px] pl-[40px] pr-[15px]">
          <Image
            src="/pin_icon.png"
            alt="pin icon"
            width={17}
            height={24}
          />
        </div>}
        
        {/* <Controller
          name="location"
          control={control}
          render={({ field }) =><Select 
            {...field}
            placeholder="Where are you going?"
            style={{  border: 'none', height: '100%' }}
            className="input__search_list"
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" }
            ]} 
          />}
        /> */}


        <input {...register("location", { required: true })} className={`input__search_list`} placeholder="Where are you going?" />
      </div>
      <div className="flex md:flex-row flex-col w-full">
        <Controller
          control={control}
          name='start_date'
          render={({ field }) => (
            <DatePicker
              showIcon={!props?.horizontalForm}
              minDate={new Date()}
              icon={
                <div className="left-[-56px]">
                  <Image
                    src="/calendar_icon.png"
                    alt="calendar image"
                    width={18}
                    height={18}
                  />
                </div>
              }
              wrapperClassName={props?.horizontalForm ? "date_picker_custom_horizontal" : "date_picker_custom"}
              // selected={startDate}
              // onChange={(date: Date) => setStartDate(date)}
              onChange={(date) => field.onChange(date)}
              selected={field?.value || new Date()}
            />
        )}
        />
        {/* <DatePicker
          showIcon={!props?.horizontalForm}
          name="start_date"
          minDate={new Date()}
          icon={
            <div className="left-[-56px]">
              <Image
                src="/calendar_icon.png"
                alt="calendar image"
                width={18}
                height={18}
              />
            </div>
          }
          wrapperClassName={props?.horizontalForm ? "date_picker_custom_horizontal" : "date_picker_custom"}
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        /> */}
        <Controller
          control={control}
          name='end_date'
          render={({ field }) => (
            <DatePicker
              minDate={new Date()}
              wrapperClassName={props?.horizontalForm ? "date_picker_custom_horizontal" : "date_picker_custom"}
              // selected={endDate}
              // onChange={(date: Date) => setSEndDate(date)}
              onChange={(date) => field.onChange(date)}
              selected={field?.value || new Date(Date.now() + ( 3600 * 1000 * 24))}
          />
        )}
        />
        {/* <DatePicker
          name="end_date"
          minDate={new Date()}
          wrapperClassName={props?.horizontalForm ? "date_picker_custom_horizontal" : "date_picker_custom"}
          selected={endDate}
          onChange={(date: Date) => setSEndDate(date)}
        /> */}
      </div>
      <div className={props?.horizontalForm ? `input__search_list_amount_container_custom ${errors?.people ? "error__input" : ""}` : `input__search_list_amount_container ${errors?.people ? "error__input" : ""}`}>
        {!props?.horizontalForm && <div className="py-[14px] pl-[40px] pr-[15px]">
          <Image
            src="/users_icon.png"
            alt="users icon"
            width={22}
            height={18}
          />
        </div>}
        <input {...register("people", { required: true })} className={props?.horizontalForm ? "input__search_list_horizontal" : "input__search_list"} placeholder="Select" />
      

      </div>
      <div className={props?.horizontalForm ? "" : "w-full flex justify-center"}>
        <Button type='submit' label='Search' className={`btn__primary ${props?.horizontalForm ? '' : 'mt-[32px]'}`} labelClassName='btn__primary_text'/>
      </div>
    </div>
    </form>
  )
}

export default SearchForm