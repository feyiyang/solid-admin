import type { ComponentProps } from "solid-js"
import { DInputNumber } from 'dlibs'

const InputNumberContain: ComponentProps<any> = () => {
  return (
    <div class="gap-4">
      <div class="enn-divider enn-divider-start">数字输入框</div>
      <DInputNumber.Root class="max-w-40" />
      <div class="enn-divider enn-divider-start">禁用</div>
      <DInputNumber.Root class="max-w-40" defaultValue={1} disabled />
      <div class="enn-divider enn-divider-start">步长</div>
      <DInputNumber.Root class="max-w-40" defaultValue={1} step={2} />
    </div>
  )
}

export default InputNumberContain
