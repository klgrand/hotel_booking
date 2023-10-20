'use client'

import React from 'react'
import { PAGE_NOT_FOUND } from '@/constants'

const Error = () => {
  return (
    <div className="sublayout">
      <div className="sublayout__empty_page">
        <div className="text__error_message">
          {PAGE_NOT_FOUND}
        </div>
      </div>
    </div>
  )
}

export default Error