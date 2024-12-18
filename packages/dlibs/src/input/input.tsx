import {
  splitProps,
  type Component,
  mergeProps,
  ComponentProps,
  createSignal,
  Show
} from 'solid-js'
import { TextField } from '@kobalte/core/text-field'
import { type InputRootProp, defInput, sizeVariants } from './constant'
import { InputContext, useInputContext } from './input-context'
import { Dynamic } from 'solid-js/web'

const Root: Component<InputRootProp> = (props) => {
  const merged = mergeProps(defInput, props)
  const [local, rest] = splitProps(merged, ['size', 'class', 'clearable', 'multiline'])
  const [initValue, setInitValue] = createSignal('')

  const handleClear = () => {
    props.onChange ?
      props.onChange('') :
      setInitValue('')
  }
  const clearIsHidden = () => !props.value && !initValue()
  const clazz = local.multiline ? 'enn-textarea enn-textarea-bordered' : `enn-input enn-input-bordered gap-2 ${sizeVariants[local.size]}`
  return (
    <InputContext.Provider value={{ size: local.size, clearable: local.clearable, handleClear, hidden: clearIsHidden, multiline: local.multiline }}>
      <TextField
        class={`flex items-center ${clazz} ${local.class || ''}`}
        value={initValue()}
        onChange={setInitValue}
        {...rest}
      />
    </InputContext.Provider>
  )
}
const Input: Component<ComponentProps<any>> = (props) => {
  const [local] = splitProps(props, ['class'])
  const context: any = useInputContext()
  return <>
    <Dynamic component={context.multiline ? TextField.TextArea : TextField.Input} class={`grow outline-none ${local.class || ''}`} {...props} />
    {/* <TextField.Input /> */}
    <Show when={context.clearable && !context.hidden()}>
      <span class="icon-[tdesign--close-circle-filled] btn-clear" classList={{hidden: context.hidden()}} onclick={context.handleClear}></span>
    </Show>
    
  </>
}
const Label: Component<any> = (props) => {
  return <TextField.Label as="div" class="label" {...props} />
}

export const DInput = {
  Root: Root,
  Input: Input,
  Label: Label
}
