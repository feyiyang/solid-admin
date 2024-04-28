import { Component, ComponentProps, mergeProps } from "solid-js"


const variants = {
  mode: {
    horizontal: 'menu-hor',
    vertical: 'menu-ver',
    inline: 'menu-inl'
  }
}

interface MenurBarOptions {
  mode?: keyof typeof variants.mode
}

type MenuBarProp = Omit<ComponentProps<'div'>, keyof MenurBarOptions> & MenurBarOptions
export const menuBar: Component<MenuBarProp> = (props) => {
  const merged = mergeProps({}, props)
  return (
  <>
  </>
  )
}