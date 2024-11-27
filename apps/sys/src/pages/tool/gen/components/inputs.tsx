import type { Component, ComponentProps } from "solid-js"
import { DInput } from "dlibs"

const InputContain: Component<ComponentProps<any>> = () => {
  return (
    <>
      <div class="enn-divider enn-divider-start">Text Field</div>
      <DInput.Root>
        <DInput.Label>Favorite fruit</DInput.Label>
        is:
        <DInput.Input placeholder="Text Field" />
        oh!
      </DInput.Root>
    </>
  )
}

export default InputContain