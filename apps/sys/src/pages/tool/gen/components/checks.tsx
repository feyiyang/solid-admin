import { type Component } from "solid-js"
import { DCheckbox } from 'dlibs'

const CheckBoxContain: Component<any> = () => {
  return (
    <div class="gap-4">
      <div class="enn-divider enn-divider-start">基本用法</div>
      <DCheckbox defaultChecked>选项</DCheckbox><DCheckbox>选项</DCheckbox>
      <div class="enn-divider enn-divider-start">禁用</div>
      <DCheckbox defaultChecked disabled>选项</DCheckbox><DCheckbox disabled>选项</DCheckbox>
      <div class="enn-divider enn-divider-start">Indeterminate</div>
      <DCheckbox indeterminate>选项</DCheckbox>
    </div>
  )
}

export default CheckBoxContain