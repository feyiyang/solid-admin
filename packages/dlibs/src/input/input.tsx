import { splitProps, type Component, mergeProps, ComponentProps } from "solid-js"
import { TextField } from "@kobalte/core"
import { type InputRootProp, defInput, sizeVariants } from "./constant"
import { InputContext, useInputContext } from "./input-context"

const Root:Component<InputRootProp> = (props) => {
  const merged = mergeProps(defInput, props)
  const [local, rest] = splitProps(merged, ['size', 'class', 'asChild'])
  
  return (
    <InputContext.Provider value={{ size: local.size }}>
      <TextField.Root class={`enn-input enn-input-bordered flex items-center gap-2 ${sizeVariants[local.size]} max-w-xl ${local.class || ''}`} asChild={local.asChild} as='label' {...rest} />
    </InputContext.Provider>
  )
}
const Input:Component<ComponentProps<'input'>> = (props) => {
  const [local] = splitProps(props, ['class'])
  return <TextField.Input class={`grow ${local.class || ''}`} {...props} />
}
const Label:Component<any> = (props) => {
  return <TextField.Label as='div' class="label" {...props} />
}

export const DInput = {
  Root: Root,
  Input: Input,
  Label: Label
}