import { createContext, useContext } from 'solid-js'

export const MenuContext = createContext()

export function useOptionalMenuContext() {
  return useContext(MenuContext)
}

export function useMenuContext() {
  const context = useOptionalMenuContext()

  if (context === undefined) {
    throw new Error(
      '[enn]: `useMenuContext` must be used within a `DMenu` component'
    )
  }

  return context as any
}

export const SubContext = createContext()

export function useOptionalSubContext() {
  return useContext(SubContext)
}

export function useSubContext() {
  const context = useOptionalMenuContext()

  if (context === undefined) {
    throw new Error(
      '[enn]: `useMenuContext` must be used within a `Menu` component'
    )
  }

  return context as any
}
