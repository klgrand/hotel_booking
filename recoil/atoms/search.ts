import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

export const searchState = atom<string>({
  key: 'searchState',
  default: ''
})

export const useSearchState = () => useRecoilState(searchState)
export const useSearchStateValue = () => useRecoilValue(searchState)
export const useSetSearchStateState = () => useSetRecoilState(searchState)
