import { type Component, type ComponentProps } from 'solid-js'
import { DRate } from 'dlibs'

const RateContain: Component<ComponentProps<any>> = () => {
  return (
    <div class="gap-4">
      <div class="enn-divider enn-divider-start">基本用法</div>
      <DRate />
      <DRate label="半星状态" allowHalf />
      <div class="enn-divider enn-divider-start">只读状态</div>
      <DRate readOnly value={2.5} allowHalf />
    </div>
  )
}

export default RateContain
