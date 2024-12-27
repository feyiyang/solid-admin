export const defProps = {
  type: 'accent'
}

export const styleVariants = {
  type: {
    accent: 'enn-badge-accent',
    secondary: 'enn-badge-secondary',
    info: 'enn-badge-info',
    primary: 'enn-badge-primary',
    success: 'enn-badge-success',
    warning: 'enn-badge-warning',
    error: 'enn-badge-error',
    ghost: 'enn-badge-ghost'
  },
  cls: ['enn-indicator', 'enn-indicator-item', 'enn-badge', 'enn-badge-sm']
}

export interface BadgeProps {
  type?: keyof typeof styleVariants.type
  value?: string | number
  outline?: boolean
  dot?: boolean
}