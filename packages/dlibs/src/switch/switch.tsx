import { Switch } from '@kobalte/core'
import { SwitchRootProps } from '@kobalte/core/switch'
import { ComponentProps, createEffect, splitProps } from 'solid-js'
const Root = (props: SwitchRootProps & ComponentProps<any>) => {
  const [local, rest] = splitProps(props, ['children', 'label', 'class'])
  createEffect(() => {
    if (rest.checked) {
      return 'checked'
    }
  })
  return (
    <div class="enn-form-control">
      <Switch.Root class={`enn-label flex ${local.class}`} {...rest}>
        {local.label && <Switch.Label class="enn-label-text">{local.label}</Switch.Label>}
        <Switch.Input />
        <Switch.Control class={`enn-toggle ${rest.checked ? 'enn-toggle-checked' : ''}`}>
          {/* <Switch.Thumb /> */}
        </Switch.Control>
      </Switch.Root>
    </div>
  )
}

export const DSwitch = Object.assign(Root, {})