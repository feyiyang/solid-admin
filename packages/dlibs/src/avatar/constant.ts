export const defaltProps = {
  shape: 'circle',
  size: 'md'
}

export const styleVariants: any = {
  shape: {
    rounded: 'rounded-xl',
    circle: 'rounded-full'
  },
  size: {
    sm: 'h-6 w-6',
    md: 'h-12 w-12',
    lg: 'h-24 w-24'
  },
  presence: {
    on: 'enn-online',
    off: 'enn-offline'
  }
}

export interface avatarProps {
  image?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
  shape?: 'rounded' | 'circle'
  presence?: 'on' | 'off'
}
