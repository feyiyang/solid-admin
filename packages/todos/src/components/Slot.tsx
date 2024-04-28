import { children, Component, createComputed, JSXElement, on } from "solid-js"
import { createStore } from "solid-js/store"

export const getSlots = (_children: JSXElement) => {
  const parts = children(() => _children)
  const [slots, setSlots] = createStore<Record<string, JSXElement>>({})

  createComputed(
    on(parts, () => {
      for (const part of parts.toArray() as unknown as SlotProps[]) {
        if (!part.name) {
          setSlots('default', () => part.children)
          continue
        }
        setSlots(part.name, () => part.children)
      }
    })
  )
  return slots
}

export const Section: Component<SectionProps> = (props) => {
  const slots = getSlots(props.children)

  return (
    <section>
      <header class="bg-black text-white p-5">{slots.header}</header>
      <div class="p-5">{slots.default}</div>
    </section>
  )
}

export const Slot: Component<SlotProps> = (props) => {
  return props as unknown as JSXElement
}

interface SlotProps {
  name: string
  children: JSXElement
}
interface SectionProps {
  children: JSXElement
}