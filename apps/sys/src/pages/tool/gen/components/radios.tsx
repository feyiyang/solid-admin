import { type Component } from "solid-js"
import { DRadioGroup } from "dlibs"

const RadioContain: Component<any> = () => {
  return (
    <div class="gap-4">
      <div class="enn-divider enn-divider-start">基础用法</div>
      <div>
        <DRadioGroup.Root>
          <DRadioGroup.Radio value="1">选项</DRadioGroup.Radio>
          <DRadioGroup.Radio value="2">选项</DRadioGroup.Radio>
        </DRadioGroup.Root>
      </div>
    </div>
  )
}

export default  RadioContain