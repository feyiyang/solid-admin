import { children, splitProps, type Component } from 'solid-js'
import { RadioGroup } from '@kobalte/core'
import { radioGroupProps, radioItemProps } from './constant'

const Root: Component<radioGroupProps> = (props) => {
  return <RadioGroup.Root {...props} />
}

const GroupLabel: Component<any> = (props) => {
  return <RadioGroup.Label {...props} />
}

const Radio: Component<radioItemProps> = (props) => {
  const [local, rest] = splitProps(props, ['value', 'children', 'orientation'])
  const cld = children(() => local.children)
  return (
    <RadioGroup.Item class="enn-label" value={local.value} {...rest}>
      <RadioGroup.ItemInput class="enn-radio-input" />
      <RadioGroup.ItemControl class="enn-radio">
        <RadioGroup.ItemIndicator class="enn-radio-indicator" />
      </RadioGroup.ItemControl>
      <RadioGroup.ItemLabel class="enn-label-text">
        {cld()}
      </RadioGroup.ItemLabel>
    </RadioGroup.Item>
  )
}

export const DRadioGroup = {
  Root,
  GroupLabel,
  Radio
}
