import type { Component, ComponentProps } from 'solid-js'
import { DSlider } from 'dlibs'

const SlidersContain: Component<ComponentProps<any>> = () => {
  return (
    <div class="gap-4">
      <div class="enn-divider enn-divider-start">基本用法</div>
      <DSlider class="max-w-xl" label="默认" />
      <div class="py-4" />
      <DSlider class="max-w-xl" label="初始值" defaultValue={[20]} />
      <div class="py-4" />
      <DSlider class="max-w-xl" label="" valueVisible={false} />
      <div class="py-4" />
      <DSlider
        class="max-w-xl"
        label="格式化"
        defaultValue={[20]}
        getValueLabel={(params: any) => `${params.values[0]}%`}
      />
      <div class="py-4" />
      <DSlider class="max-w-xl" defaultValue={[10]} label="禁用" disabled />
      <div class="py-4" />
      <div class="enn-divider enn-divider-start">离散值</div>
      <DSlider class="max-w-xl" label="步长10" defaultValue={[20]} step={10} />
      <div class="py-4" />
      <div class="enn-divider enn-divider-start">范围选择</div>
      <DSlider class="max-w-xl" label="" step={2} defaultValue={[10, 20]} range />
      <div class="py-4" />
      <DSlider
        class="max-w-xl"
        label="最小中间值"
        defaultValue={[10, 20]}
        range
        minStepsBetweenThumbs={10}
      />
      <div class="py-4" />
      <div class="enn-divider enn-divider-start">竖向滑块</div>
      <DSlider class="w-32 h-40" orientation="vertical" />
    </div>
  )
}

export default SlidersContain
