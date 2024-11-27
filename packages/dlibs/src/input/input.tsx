import {
  splitProps,
  type Component,
  mergeProps,
  ComponentProps,
  children
} from 'solid-js'
import { TextField } from '@kobalte/core/text-field'
import { type InputRootProp, defInput, sizeVariants } from './constant'
import { InputContext } from './input-context'

const Root: Component<InputRootProp> = (props) => {
  const merged = mergeProps(defInput, props)
  const [local, rest] = splitProps(merged, ['size', 'class', 'children'])

  // const cld = children(() => local.children)
  // console.log(cld(), props)

  return (
    <InputContext.Provider value={{ size: local.size }}>
      <TextField
        class={`enn-input enn-input-bordered flex items-center gap-2 ${sizeVariants[local.size]} ${local.class || ''}`}
        as="label"
        {...props}
      />
    </InputContext.Provider>
  )
}
const Input: Component<ComponentProps<any>> = (props) => {
  const [local] = splitProps(props, ['class'])
  return <TextField.Input class={`grow ${local.class || ''}`} {...props} />
}
const Label: Component<any> = (props) => {
  return <TextField.Label as="div" class="label" {...props} />
}

export const DInput = {
  Root: Root,
  Input: Input,
  Label: Label
}
