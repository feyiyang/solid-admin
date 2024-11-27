import { children, splitProps, type Component } from 'solid-js'
import { RadioGroup } from '@kobalte/core'
import { radioGroupProps, radioItemProps } from './constant'

const Root: Component<radioGroupProps> = (props) => {
  const [local, rest] = splitProps(props, ['orientation', 'class'])
  return <RadioGroup.Root class={`enn-radio-group-${local.orientation || 'horizontal'} ${local.class || ''}`} {...rest} />
}

const GroupLabel: Component<any> = (props) => {
  return <RadioGroup.Label {...props} />
}

const Radio: Component<radioItemProps> = (props) => {
  const [local, rest] = splitProps(props, ['value', 'children'])
  const cld = children(() => local.children)
  let rdRef: any
  return (
    <RadioGroup.Item class="enn-radio-label" value={local.value} {...rest}>
      <RadioGroup.ItemInput ref={rdRef} />
      <RadioGroup.ItemControl class="enn-radio" disabled={props.disabled} aria-checked={rdRef.checked}>
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
