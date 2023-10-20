import React from 'react'
import PaymentDetail from '@/components/PaymentDetail'
import { formatPrice } from '@/utils'
import { PAYMENT_LIST } from '@/constants'

const MOCK_SUMMARY_PRICE = {
  tax: 140,
  discount: 0,
  price: 1000,
  total: 1140
}

const Payment = () => {
  return (
    <div className="sublayout">
      <div className="sublayout_container flex-col 2xl:flex-row justify-between">
        <div className="payment_detail">
          <div className="payment_detail__title">
            Payment Details
          </div>
          {
            PAYMENT_LIST.map((item) => (
              <div key={item._key} >
                <PaymentDetail {...item} />
              </div>
            ))
          }
        </div>
        <div className="payment_summary">
          <div className="payment_summary__container">
            <div className="payment_summary__title">
              Base fare
            </div>
            <div className="payment_summary__price">
              {formatPrice(MOCK_SUMMARY_PRICE.price, 2)}
            </div>
          </div>
          <div className="payment_summary__container">
            <div className="payment_summary__title">
              Totoal discount
            </div>
            <div className="payment_summary__price">
              {formatPrice(MOCK_SUMMARY_PRICE.discount, 2)}
            </div>
          </div>
          <div className="payment_summary__container">
            <div className="payment_summary__title">
              Price after discount
            </div>
            <div className="payment_summary__price">
              {formatPrice(MOCK_SUMMARY_PRICE.price - MOCK_SUMMARY_PRICE.discount, 2)}
            </div>
          </div>
          <div className="payment_summary__container">
            <div className="payment_summary__title">
              Taxes & service fees
            </div>
            <div className="payment_summary__price">
              {formatPrice(MOCK_SUMMARY_PRICE.tax, 2)}
            </div>
          </div>
          <div className="payment_summary__container">
            <div className="payment_summary__title_last">
              Total Amount
            </div>
            <div className="payment_summary__price_last">
              {formatPrice(MOCK_SUMMARY_PRICE.total, 2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
