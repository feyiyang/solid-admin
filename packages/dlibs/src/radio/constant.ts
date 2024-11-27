import { type ComponentProps } from 'solid-js'
import { RadioGroup } from '@kobalte/core'

export type radioGroupProps = RadioGroup.RadioGroupRootProps & ComponentProps<any> & {}
export type radioItemProps = ComponentProps<any> & RadioGroup.RadioGroupItemProps & {}
