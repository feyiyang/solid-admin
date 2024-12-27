import {
  type Component,
  type ComponentProps,
  mergeProps,
  Show,
  splitProps
} from 'solid-js'
import { NumberField } from '@kobalte/core/number-field'

interface InputNumberProps {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  theme?: 'row' | 'column' | 'normal'
  align?: 'left' | 'center' | 'right'
}
const defProps: InputNumberProps = {
  size: 'sm',
  theme: 'row',
  align: 'center'
}

const Root: Component<ComponentProps<any>> = (props) => {
  const merged = mergeProps(defProps, props)
  const [local, rest] = splitProps(merged, ['class', 'size', 'theme', 'align'])
  const clazz = `inline-flex items-center enn-input enn-input-bordered enn-input-${local.size} ${local.class || ''}`
  const showTrigger = () => {
    return local.theme === 'normal'
  }
  return (
    <>
      <NumberField class={clazz} {...rest}>
        <Show when={showTrigger}>
          <NumberField.DecrementTrigger class="trigger">
            <span class="icon-[tdesign--minus]" />
          </NumberField.DecrementTrigger>
        </Show>
        <NumberField.Input class={`grow text-${local.align}`} />
        <Show when={showTrigger}>
          <NumberField.IncrementTrigger class="trigger">
            <span class="icon-[tdesign--add]" />
          </NumberField.IncrementTrigger>
        </Show>
      </NumberField>
    </>
  )
}

export const DInputNumber = {
  Root
}
