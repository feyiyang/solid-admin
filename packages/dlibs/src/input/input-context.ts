import { createContext, useContext } from 'solid-js'

export const InputContext = createContext()

export function useOptionalInputContext() {
  return useContext(InputContext)
}

export function useInputContext() {
  const context = useOptionalInputContext()

  if (context === undefined) {
    throw new Error(
      '[enn]: `useInputContext` must be used within a `DInput` component'
    )
  }

  return context as any
}
