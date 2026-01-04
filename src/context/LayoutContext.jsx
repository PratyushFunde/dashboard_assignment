import { createContext, useContext } from 'react'

export const LayoutContext = createContext(null)

export const useLayout = () => {
  const ctx = useContext(LayoutContext)
  if (!ctx) {
    throw new Error('useLayout must be used inside LayoutContext.Provider')
  }
  return ctx
}
