export interface RoomDetailProps {
  _key: string
  name: string
  detail_imgs: string[]
  list_img: string
  price: number
  rating?: RatingProps
  description: string
  start_time: string
  end_time: string
  type?: string
}

export interface RatingProps {
  reviews: number
  rate: string
  housekeeping: number
  food: number
  service: number
  staff: number
}

export interface RecommendedProps {
  _key: string
  img: string
  description: string
}

export interface CartProps {
  room_detail: RoomDetailProps
  day: number
  start_date: string
  end_data: string
  people: number
  children: number
  room_count: number
  payment?: PaymentDetailProps
  tax?: number
  discount?: number
  price?: number
}

export interface PaymentDetailProps {
  _key: string
  method: string
  method_img: string
  channel?: string
  channel_img?: string
}

export interface SummaryLineProps {
  title: string
  total: boolean
  price: number
}

export interface PeoploOptionType {
  label: string
  value: string
}