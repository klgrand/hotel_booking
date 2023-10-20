import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

export const menuState = atom<string>({
  key: 'menuState',
  default: ''
})

export const useMenuState = () => useRecoilState(menuState)
export const useMenuStateValue = () => useRecoilValue(menuState)
export const useSetMenuStateState = () => useSetRecoilState(menuState)
