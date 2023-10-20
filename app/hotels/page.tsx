'use client'

import React from 'react'
import Input from '@/components/SearchInput'
import CardList from '@/components/CardList'
import Recommended from '@/components/Recommended'
import { SEARCH_PLACEHOLDER } from '@/constants'


const Hotels = () => {
  return (
    <div className="sublayout bg-[##FDFDFD]">
      <div className="sublayout_container md:pr-0 justify-between">
          <div className="max-w-[1391px] mr-[20px]">
            <Input
              name="search_explore"
              placeholder={SEARCH_PLACEHOLDER}
              className="input__search "
            />
            <CardList />
          </div>
          <Recommended />
      </div>
      
    </div>
  )
}

export default Hotels