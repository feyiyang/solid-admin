import { JSXElement } from "solid-js"

export const defProps = {
  layout: 'vertical',
  mode: 'same'
}

export const styleVariants = {
  layout: {
    vertical: 'enn-timeline-vertical',
    horizontal: 'enn-timeline-horizontal'
  },
  type: {
    accent: ['text-accent', 'bg-accent'],
    secondary: ['text-secondary', 'bg-secondary'],
    info: ['text-info', 'bg-info'],
    primary: ['text-primary', 'bg-primary'],
    success: ['text-success', 'bg-success'],
    warning: ['text-warning', 'bg-warning'],
    error: ['text-error', 'bg-error']
  }
}

export interface timelineProps {
  layout?: 'vertical' | 'horizontal'
  mode?: 'same' | 'alternate'
  type?: 'accent' | 'secondary' | 'info' | 'primary' | 'success' | 'warning' | 'error'
}

export interface timelineItemProps {
  icon?: JSXElement | string
}