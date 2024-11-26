import { ComponentProps } from 'solid-js'
import { Button } from '@kobalte/core'

export const styleVariants = {
  type: {
    default: '',
    neutral: 'enn-btn-neutral',
    primary: 'enn-btn-primary',
    secondary: 'enn-btn-secondary',
    accent: 'enn-btn-accent',
    info: 'enn-btn-info',
    success: 'enn-btn-success',
    warning: 'enn-btn-warning',
    error: 'enn-btn-error'
  },
  size: {
    lg: 'enn-btn-lg',
    md: 'enn-btn-md', // default
    sm: 'enn-btn-sm',
    xs: 'enn-btn-xs'
  },
  ghost: 'enn-btn-ghost',
  link: 'enn-btn-link',
  outline: 'enn-btn-outline',
  glass: 'enn-glass',
  circle: 'enn-circle',
  round: 'enn-btn-round'
}

export const defButton = {
  type: '',
  size: 'md',
  ghost: false,
  link: false,
  outline: false,
  glass: false,
  circle: false,
  round: false,
  'native-type': 'button'
}

export type ButtonProps = Omit<Button.ButtonRootProps, 'type'> &
  Omit<ComponentProps<'input' | 'button'>, 'type'> & {
    type?: keyof typeof styleVariants.type
    size?: keyof typeof styleVariants.size
    'native-type'?: 'submit' | 'button' | 'radio' | 'checkbox' | 'reset'
    ghost?: boolean
    link?: boolean
    outline?: boolean
    glass?: boolean
    circle?: boolean
    round?: boolean
  }
