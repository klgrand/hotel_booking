import React from 'react'
import Card from '@/components/Card'
import { ROOM_LIST } from '@/constants'
import Button from './Button'

const CardList = () => {
  return (
    <div className="list__card">
      <div className="list__card_utils">
        <div className="list__card_utils_title">
          Rest places to enjoy your stay
        </div>
        <div className="flex gap-[22px]">
          <Button
            className="list__card_utils_button"
            label='Sort By'
            labelClassName="list__card_utils_button__text"
          />
          <Button
            className="list__card_utils_button"
            label='Filter'
            labelClassName="list__card_utils_button__text"
          />
        </div>
      </div>
      <div className="list__card_container">
        {ROOM_LIST.map(room => (
          <div key={room._key}>
            <Card {...room} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardList