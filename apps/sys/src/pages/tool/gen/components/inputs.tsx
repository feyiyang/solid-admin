import type { Component, ComponentProps } from "solid-js"
import { createSignal } from "solid-js"
import { DInput } from "dlibs"

const InputContain: Component<ComponentProps<any>> = () => {
  const [defVal, setDefVal] = createSignal('可清空')
  return (
    <div class="gap-4">
      <div class="enn-divider enn-divider-start">Text Field</div>
      <DInput.Root class="max-w-md">
        prefix
        <DInput.Input placeholder="Text Field"></DInput.Input>
        suffix
      </DInput.Root>
      <div class="enn-divider enn-divider-start">禁用状态</div>
      <DInput.Root disabled class="max-w-md">
        prefix
        <DInput.Input placeholder="Text Field"></DInput.Input>
        suffix
      </DInput.Root>
      <div class="enn-divider enn-divider-start">可清空</div>
      <DInput.Root clearable class="max-w-md" value={defVal()} onChange={setDefVal}>
        <DInput.Input />
      </DInput.Root>
      <div class="enn-divider enn-divider-start">文本域</div>
      <DInput.Root class="max-w-md" multiline>
        <DInput.Input />
      </DInput.Root>
    </div>
  )
}

export default InputContain