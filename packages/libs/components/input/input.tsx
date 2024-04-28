import { Component, ComponentProps, splitProps, createSignal } from 'solid-js'

export type InputProps = {
  type?: 'text' | 'email' | 'tel' | 'password' | 'date' | 'url'
  label?: string
  placeholder?: string
  value?: string | undefined
  disabled?: boolean
  required?: boolean
  prepend?: any
  append?: any
  ref?: (element: HTMLInputElement) => void
}

const [value, setValue] = createSignal('')

export const Input: Component<InputProps & ComponentProps<'input'>> = (
  props
) => {
  const [local, rest] = splitProps(props, [
    'class',
    'ref',
    'prepend',
    'children'
  ])
  const clazzName = `chai-input ${local.class} ${props.disabled ? 'chai-disabled' : ''}`

  setValue(props.value || '')
  return (
    <div class={clazzName} chai-flex chai-items-center>
      {props.prepend}
      <input chai-block chai-w-full chai-h-full {...rest} />
      {props.append}
    </div>
  )
}
export const InputPrepend: Component<ComponentProps<'span'>> = (props) => {
  const [local, rest] = splitProps(props, ['class'])
  return <span class={`chai-prepend text-center ${local.class}`} {...rest} />
}
export const InputAppend: Component<ComponentProps<'span'>> = (props) => {
  const [, rest] = splitProps(props, ['class'])
  return <span class="chai-append" {...rest} />
}
export const InputClearTrigger = () => {}
