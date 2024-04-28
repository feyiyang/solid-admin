import { children, createComputed, JSXElement, on, type Component } from 'solid-js'
import { createStore } from 'solid-js/store'
export const getSlots = (_children: JSXElement) => {
  const parts = children(() => _children)
  const [slots, setSlots] = createStore<Record<string, JSXElement>>({})
  createComputed(
    on(parts, () => {
      const defautParts:any = []
      for (const part of parts.toArray() as unknown as SlotProps[]) {
        if (!part.name) {
          defautParts.push(part)
          setSlots('default', (): any => (<>{...defautParts}</>))
          continue
        }
        setSlots(part.name, () => part.children)
      }
    })
  )
  return slots
}

export interface SlotProps {
  name?: string
  children: JSXElement
}

export const Slot: Component<SlotProps> = (props) => {
  return props as unknown as JSXElement
}