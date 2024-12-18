import { type ComponentProps } from 'solid-js'
import { TextField } from '@kobalte/core'

export const defInput = {
  // type: 'text',
  // clearable: false,
  // disabled: false,
  size: 'sm'
}

export const sizeVariants: any = {
  xs: 'enn-input-xs',
  sm: 'enn-input-sm',
  md: 'enn-input-md'
}
export const alignVariants = {
  center: 'text-center',
  left: 'text-left',
  right: 'text-right'
}

export type InputRootProp = TextField.TextFieldRootProps & ComponentProps<any> & {
  clearable?: boolean
  size?: 'xs' | 'sm' | 'md'
}
export type InputTextProp = ComponentProps<'input'> &
  TextField.TextFieldInputProps & {}
