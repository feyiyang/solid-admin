import { Component, splitProps, mergeProps, children } from 'solid-js'
import { Button as KButton } from '@kobalte/core'
import { ButtonProps, defButton } from './constant'
import './style.less'

const Button: Component<ButtonProps> = (props) => {
  const merged = mergeProps(defButton, props)
  const [local, rest] = splitProps(merged, ['class', 'children', 'type', 'size', 'ghost', 'outline'])
  const cld = children(() => local.children) || ''
  const clazz = `enn-btn enn-btn-${local.type} enn-btn-${local.size} ${local.class || ''}`
  const clazzObj = {
    'enn-ghost': local.ghost,
    'enn-btn-outline': local.outline
  }
  
  return (
    <KButton.Root as='input' class={clazz} classList={clazzObj} type='button' aria-label={cld() as string} value={cld() as string} />
  )
}

export const DButton = {
  Root: Button
}
