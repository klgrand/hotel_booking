import { RoomDetailProps, RecommendedProps, PaymentDetailProps, CartProps } from '@/types'

export const UNAVAILABLE_PAGE_DESCRIPTION = "Sorry for the inconvenience. This page is unavailable ..." 

export const SEARCH_PLACEHOLDER = "Search city, Country, Place for Travel advisory"

export const PAGE_NOT_FOUND = "Page not found"


export const MENUS = [
  {
    _key: 'home',
    label: 'Home',
    url: '/',
    logo: 'home_icon.png'
  },
  {
    _key: 'explore',
    label: 'Explore',
    url: '/explore',
    logo: 'search_icon.png'
  },
  {
    _key: 'trips',
    label: 'Trips',
    url: '/trips',
    logo: 'heart_icon.png'
  },
  {
    _key: 'profile',
    label: 'Profile',
    url: '/profile',
    logo: 'user_icon.png'
  },
]

export const ROOM_DETAIL: RoomDetailProps = {
  _key: 'nobu_hotal_chicago',
  name: 'Nobu Hotel Chicago',
  detail_imgs: ['list_img_01.png', 'list_img_01.png', 'list_img_01.png', 'list_img_01.png'],
  list_img: 'list_img_01.png',
  price: 1000,
  description: 'Tambudki Arpora, goa, Goa, India',
  start_time: '10am',
  end_time: '10am',
}

export const ROOM_LIST: RoomDetailProps[] = [
  {
    _key: 'nobu_hotal_chicago',
    name: 'Nobu Hotel Chicago',
    detail_imgs: ['list_img_01.png'],
    list_img: 'list_img_01.png',
    price: 1000,
    description: 'Tambudki Arpora, goa, Goa, India This hotel is reviewed by global firm',
    start_time: '10am',
    end_time: '10am',
  },
  {
    _key: 'nobu_hotal_chicago2',
    name: 'Nobu Hotel Chicago',
    detail_imgs: ['list_img_01.png'],
    list_img: 'list_img_01.png',
    price: 1000,
    description: 'Tambudki Arpora, goa, Goa, India This hotel is reviewed by global firm',
    start_time: '10am',
    end_time: '10am',
  },
  {
    _key: 'nobu_hotal_chicago3',
    name: 'Nobu Hotel Chicago',
    detail_imgs: ['list_img_01.png'],
    list_img: 'list_img_01.png',
    price: 1000,
    description: 'Tambudki Arpora, goa, Goa, India This hotel is reviewed by global firm',
    start_time: '10am',
    end_time: '10am',
  },
  {
    _key: 'nobu_hotal_chicago',
    name: 'Nobu Hotel Chicago',
    detail_imgs: ['list_img_01.png'],
    list_img: 'list_img_01.png',
    price: 1000,
    description: 'Tambudki Arpora, goa, Goa, India This hotel is reviewed by global firm',
    start_time: '10am',
    end_time: '10am',
  },
  {
    _key: 'nobu_hotal_chicago4',
    name: 'Nobu Hotel Chicago',
    detail_imgs: ['list_img_01.png'],
    list_img: 'list_img_01.png',
    price: 1000,
    description: 'Tambudki Arpora, goa, Goa, India This hotel is reviewed by global firm',
    start_time: '10am',
    end_time: '10am',
  },
  {
    _key: 'nobu_hotal_chicago5',
    name: 'Nobu Hotel Chicago',
    detail_imgs: ['list_img_01.png'],
    list_img: 'list_img_01.png',
    price: 1000,
    description: 'Tambudki Arpora, goa, Goa, India This hotel is reviewed by global firm',
    start_time: '10am',
    end_time: '10am',
  },
  {
    _key: 'nobu_hotal_chicago6',
    name: 'Nobu Hotel Chicago',
    detail_imgs: ['list_img_01.png'],
    list_img: 'list_img_01.png',
    price: 1000,
    description: 'Tambudki Arpora, goa, Goa, India This hotel is reviewed by global firm',
    start_time: '10am',
    end_time: '10am',
  },
  {
    _key: 'nobu_hotal_chicago7',
    name: 'Nobu Hotel Chicago',
    detail_imgs: ['list_img_01.png'],
    list_img: 'list_img_01.png',
    price: 1000,
    description: 'Tambudki Arpora, goa, Goa, India This hotel is reviewed by global firm',
    start_time: '10am',
    end_time: '10am',
  },
  {
    _key: 'nobu_hotal_chicago8',
    name: 'Nobu Hotel Chicago',
    detail_imgs: ['list_img_01.png'],
    list_img: 'list_img_01.png',
    price: 1000,
    description: 'Tambudki Arpora, goa, Goa, India This hotel is reviewed by global firm',
    start_time: '10am',
    end_time: '10am',
  }
]

export const RECOMMENDED_LIST: RecommendedProps[] = [
  {
    _key: 'b01',
    img: "booking_01.png",
    description: "Trip to Thailand & Get 30% off on fight booking"
  },
  {
    _key: 'b02',
    img: "booking_02.png",
    description: "get additional 25% off on Bhutan tour fare"
  },
  {
    _key: 'b03',
    img: "booking_03.png",
    description: "Trip to Thailand & Get 30% off on flight booking"
  },
  {
    _key: 'b04',
    img: "booking_04.png",
    description: "Flat 40% off on hotel bookings in Agra"
  },
  {
    _key: 'b05',
    img: "booking_05.png",
    description: "Flat 40% off on hotel bookings in Agra"
  },
]

export const PAYMENT_LIST: PaymentDetailProps[] = [
  {
    _key: 'payment_01',
    method: 'Debit Card',
    method_img: 'payment_method_01.png',
    channel: 'UPI',
    channel_img: 'payment_channel_01.png',
  },
  {
    _key: 'payment_02',
    method: 'PhonePay',
    method_img: 'payment_method_02.png',
  },
  {
    _key: 'payment_03',
    method: 'Net Banking',
    method_img: 'payment_method_03.png',
  },
  {
    _key: 'payment_04',
    method: 'Credit Card',
    method_img: 'payment_method_04.png',
  }
]

export const RECENTLY_SEARCH_LIST: RoomDetailProps[] = [
  {
    _key: 'nobu_hotal_chicago',
    name: 'Nobu Hotel Chicago',
    detail_imgs: ['recent_search_01.png'],
    list_img: 'recent_search_01.png',
    price: 1000,
    description: 'Tambudki Arpora, goa, Goa, India This hotel is reviewed by global firm',
    start_time: '10am',
    end_time: '10am',
  },
  {
    _key: 'nobu_hotal_chicago2',
    name: 'Nobu Hotel Chicago',
    detail_imgs: ['recent_search_01.png'],
    list_img: 'recent_search_01.png',
    price: 1000,
    description: 'Tambudki Arpora, goa, Goa, India This hotel is reviewed by global firm',
    start_time: '10am',
    end_time: '10am',
  }
]

export const RECENTLY_LOGO = [
  {
    img: "recent_car.png",
    _key: "car"
  },
  {
    img: "recent_baht.png",
    _key: "baht"
  },
  {
    img: "recent_wine.png",
    _key: "wine"
  },
  {
    img: "recent_wifi.png",
    _key: "wifi"
  },
  {
    img: "recent_exercise.png",
    _key: "exercise"
  },
  {
    img: "recent_other.png",
    _key: "other"
  },
]

export const RATING_LOGO = [
  {
    img: "rating_car.png",
    _key: "car"
  },
  {
    img: "rating_baht.png",
    _key: "baht"
  },
  {
    img: "rating_wine.png",
    _key: "wine"
  },
  {
    img: "rating_wifi.png",
    _key: "wifi"
  },
  {
    img: "rating_exercise.png",
    _key: "exercise"
  },
]

export const ROOM_CAMPAIGN_BOX: RoomDetailProps[] = [
  {
    _key: 'nobu_hotal_chicago',
    name: 'Nobu Hotel Chicago',
    detail_imgs: ['campaign_room.png'],
    list_img: 'campaign_room.png',
    price: 1500,
    description: 'Tambudki Arpora, goa, Goa, India This hotel is reviewed by global firm',
    start_time: '10am',
    end_time: '10am',
    type: 'Deluxe Room'
  },
  {
    _key: 'nobu_hotal_chicago2',
    name: 'Nobu Hotel Chicago',
    detail_imgs: ['campaign_room.png'],
    list_img: 'campaign_room.png',
    price: 1000,
    description: 'Tambudki Arpora, goa, Goa, India This hotel is reviewed by global firm',
    start_time: '10am',
    end_time: '10am',
    type: 'Deluxe Room'
  }
]

export const CART_ROOM: CartProps = {
  room_detail: ROOM_DETAIL,
  day: 1,
  start_date: '20/10/66',
  end_data: '21/10/66',
  people: 1,
  children: 0,
  room_count: 1,
  tax: 140,
  discount: 0,
  price: 1000,
}