import { Component, splitProps, mergeProps, children } from 'solid-js'
import { Button as KButton } from '@kobalte/core'
import { ButtonProps, defButton } from './constant'
import './style.less'

const Button: Component<ButtonProps> = (props) => {
  const merged = mergeProps(defButton, props)
  const [local, rest] = splitProps(merged, [
    'class',
    'children',
    'type',
    'native-type',
    'size',
    'ghost',
    'outline',
    'circle',
    'link',
    'glass',
    'round'
  ])
  const cld = children(() => local.children) || ''
  const clazz = `enn-btn ${local.class || ''}`
  const clazzObj = {
    [`enn-btn-${local.type}`]: local.type && !local.link,
    [`enn-btn-${local.size}`]: local.size && !local.link,
    'enn-ghost': local.ghost,
    'enn-btn-outline': local.outline,
    'enn-btn-circle': local.circle,
    'enn-btn-link': local.link,
    'enn-btn-round': local.round,
    'enn-glass': local.glass
  }

  return (
    <KButton.Root
      as="button"
      class={clazz}
      classList={clazzObj}
      type={local['native-type'] as any}
      {...rest}
    >
      {cld()}
    </KButton.Root>
  )
}

export const DButton = {
  Root: Button
}
