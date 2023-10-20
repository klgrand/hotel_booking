import './globals.css'
import 'react-datepicker/dist/react-datepicker.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import NavBar from '@/components/NavBar'
import RecoidContextProvider from './recoilContextProvider'


const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Hotel Booking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} layout`}>
        <RecoidContextProvider>
          <NavBar />
          <div className="flex flex-1 overflow-y-auto">
            {children}
          </div>
        </RecoidContextProvider>
      </body>
    </html>
  )
}
