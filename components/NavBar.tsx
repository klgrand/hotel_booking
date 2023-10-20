'use client'

import React from 'react'
import { useRouter, usePathname, useParams } from 'next/navigation'
import Image from 'next/image'
import { useMenuState } from '@/recoil/atoms/menu'
import { MENUS } from '@/constants'


const NavBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [selectedMenu, setSelectedMenu] = useMenuState()
  const _onClick = (key: string, url: string) => {
    setSelectedMenu(key)
    router.push(url)
  }

  console.log('params .. ' , params)

  return (
    <div className={`${params?.status === 'done' ? 'hidden' : ''} md:relative flex justify-center items-center 2xl:w-[157px] md:w-[90px] w-full bg-primary-color border-0 md:rounded-br-[39px] md:rounded-tr-[39px] md:h-screen h-[80px] fixed bottom-0 z-50`}>
      <div className="md:absolute md:top-[64px] md:block hidden" onClick={() => _onClick('home', '/')}>
        <Image
          src='/logo.png'
          alt='image logo'
          width={30}
          height={34}
          className="object-contain"
        />
      </div>
      <div className="flex md:flex-col text-white md:gap-[91px] gap-6 justify-evenly w-full">
        {
          MENUS.map(menu => (
              <div key={menu._key} className="relative" onClick={() => _onClick(menu._key, menu.url)}>
                <div className="relative mb-[2px] flex flex-col items-center z-10">
                  <Image
                    src={`/${menu.logo}`}
                    alt={`${menu._key} logo`}
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>
                <div className={`relative text-[16px] leading-[16px] flex flex-col items-center z-10 ${(selectedMenu === menu._key || pathname === menu.url) ? 'text-primary-color' : ''}`}>
                  {menu.label}
                </div>
                {(selectedMenu === menu._key || pathname === menu.url) && <div className="absolute bg-[#EFEEEE] md:rounded-full w-[68px] md:h-[68px] h-[79px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default NavBar