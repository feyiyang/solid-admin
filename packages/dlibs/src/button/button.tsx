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
    'circle'
  ])
  const cld = children(() => local.children) || ''
  const clazz = `enn-btn enn-btn-${local.type} enn-btn-${local.size} ${local.class || ''}`
  const clazzObj = {
    'enn-ghost': local.ghost,
    'enn-btn-outline': local.outline,
    'enn-btn-circle': local.circle
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
