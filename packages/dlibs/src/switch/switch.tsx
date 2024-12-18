import { Switch } from '@kobalte/core'
import { SwitchRootProps } from '@kobalte/core/switch'
import { ComponentProps, createSignal, splitProps } from 'solid-js'
const Root = (props: SwitchRootProps & ComponentProps<any>) => {
  const [local, rest] = splitProps(props, ['children', 'label', 'class', 'checked', 'onChange'])
  let initChecked, setInitChecked
  if (local.checked != undefined) {
    initChecked = () => local.checked
    setInitChecked = local.onChange
  } else {
    [initChecked, setInitChecked] = createSignal(false)
  }
  
  return (
    <Switch.Root class={`enn-label inline-flex ${local.class || ''}`} checked={initChecked()} onChange={setInitChecked} {...rest}>
      {local.label && <Switch.Label class="enn-label-text">{local.label}</Switch.Label>}
      <Switch.Input />
      <Switch.Control class={`enn-toggle ${initChecked() ? 'enn-toggle-checked' : ''}`}>
        {/* <Switch.Thumb /> */}
      </Switch.Control>
    </Switch.Root>
  )
}

export const DSwitch = Object.assign(Root, {})