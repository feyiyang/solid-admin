import { Accordion } from '@kobalte/core'

export const defProps = {
  arrow: true
}

export type collapseProps = {
  title?: string
  mutex?: boolean
  arrow?: boolean
} & Accordion.AccordionRootProps
