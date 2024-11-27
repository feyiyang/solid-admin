import { type Component } from "solid-js"
import { DRadioGroup } from "dlibs"

const RadioContain: Component<any> = () => {
  return (
    <div class="gap-4">
      <div class="enn-divider enn-divider-start">单选框组</div>
      <DRadioGroup.Root>
        <DRadioGroup.Radio name="rd0" value="1">选项</DRadioGroup.Radio>
        <DRadioGroup.Radio name="rd0" value="2">选项</DRadioGroup.Radio>
      </DRadioGroup.Root>
      <div class="enn-divider enn-divider-start">禁用</div>
      <div class="grid grid-cols-4">
        <DRadioGroup.Root class="mr-8" defaultValue="1">
          <span class="mr-6">禁用项</span>
          <DRadioGroup.Radio name="rd1" value="1" disabled>选项</DRadioGroup.Radio>
          <DRadioGroup.Radio name="rd1" value="2">选项</DRadioGroup.Radio>
        </DRadioGroup.Root>
        <DRadioGroup.Root disabled>
          <span class="ml-16 mr-6">禁用组</span>
          <DRadioGroup.Radio name="rd2" value="1">选项</DRadioGroup.Radio>
          <DRadioGroup.Radio name="rd2" value="2">选项</DRadioGroup.Radio>
        </DRadioGroup.Root>
      </div>
    </div>
  )
}

export default  RadioContain