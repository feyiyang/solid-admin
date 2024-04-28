import type { ComponentProps, JSXElement } from 'solid-js'
import { Menubar } from '@kobalte/core'

export const defMenu = {
  mode: 'vertical',
  collapse: false,
  router: false,
  'unique-opened': true
}

export type MenuComp = ComponentProps<any> & {
  mode?: 'horizontal' | 'vertical'
  collapse?: boolean
  router?: boolean
  'default-active'?: string
  'unique-opened'?: boolean
}

export type MenuItemComp = ComponentProps<'a' | 'button'> & Menubar.MenubarItemProps & {
  index?: string
  disabled?: boolean // 是否禁用
  children?: JSXElement
  datatip?: any
}

export const defSub = {
  index: null,
  disabled: false
}
export type SubMenuComp = {
  index: string | null
  disabled?: boolean
}
