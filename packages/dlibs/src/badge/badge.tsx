import {
  children,
  mergeProps,
  splitProps,
  type Component,
  type ComponentProps
} from 'solid-js'
import { Polymorphic } from '@kobalte/core'
import { defProps } from './constant'

const Root: Component<ComponentProps<any>> = (props) => {
  const merged = mergeProps(defProps, props)
  const [local, rest] = splitProps(merged, [
    'class',
    'children',
    'type',
    'value',
    'dot',
    'outline'
  ])
  const cld = children(() => props.children)
  const hasCld = () => cld() !== undefined
  return (
    <Polymorphic
      class={local.class}
      classList={{ 'enn-indicator': hasCld() }}
      as={!hasCld() ? Empty : 'div'}
      {...rest}
    >
      <span
        class={`enn-indicator-item enn-badge enn-badge-sm enn-badge-${local.type}`}
        classList={{
          'enn-badge-dot': local.dot,
          'enn-badge-outline': local.outline
        }}
      >
        {local.value}
      </span>
      {cld()}
    </Polymorphic>
  )
}

const Empty: Component<any> = (props) => props.children

export const DBadge = Object.assign(Root, {})
