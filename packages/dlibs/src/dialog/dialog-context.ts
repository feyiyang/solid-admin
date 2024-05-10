import { createContext, useContext } from 'solid-js'

export const DialogContext = createContext()

export function useOptionalDialogContext() {
  return useContext(DialogContext)
}

export function useDialogContext() {
  const context = useOptionalDialogContext()

  if (context === undefined) {
    throw new Error(
      '[enn]: `useDialogContext` must be used within a `DDialog` component'
    )
  }

  return context as any
}
