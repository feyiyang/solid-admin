import { type Component, type ComponentProps } from "solid-js"
import { DSwitch } from 'dlibs'

const SwitchContain: Component<ComponentProps<any>> = () => {
  const [ischecked, setischecked] = createSignal(true)
  return (
    <div class="gap-4">
      <div class="enn-divider enn-divider-start">基本用法</div>
      <DSwitch />
      <DSwitch checked={ischecked()} onChange={setischecked} />
      <div class="enn-divider enn-divider-start">禁用状态</div>
      <DSwitch disabled />
    </div>
  )
}

export default SwitchContain