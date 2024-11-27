import { children, splitProps, type Component } from 'solid-js'
import { RadioGroup, RadioGroupItemControlOptions } from '@kobalte/core/radio-group'
import { radioGroupProps, radioItemProps } from './constant'
interface RadioGroup {
  ItemControl: {
    disabled: boolean
  }
}

const Root: Component<radioGroupProps> = (props) => {
  const [local, rest] = splitProps(props, ['orientation', 'class'])
  return <RadioGroup class={`enn-radio-group-${local.orientation || 'horizontal'} ${local.class || ''}`} {...rest} />
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
      <RadioGroup.ItemControl<any> class="enn-radio" disabled={props.disabled} aria-checked={rdRef.checked}>
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
