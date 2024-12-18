import { mergeProps, splitProps, type Component, type ComponentProps } from "solid-js"
import { Slider, SliderRootProps } from '@kobalte/core/slider'

const defProp = {
  valueVisible: true,
  label: 'Label'
}
const Root: Component<SliderRootProps & ComponentProps<any>> = (props) => {
  const merged = mergeProps(defProp, props)
  const [local, rest] = splitProps(merged, ['class', 'label', 'valueVisible', 'range'])
  const clazz = `enn-slider-root ${local.class}`
  return <>
    <Slider class={clazz} {...rest}>
      <div class="enn-slider-label">
        <Slider.Label>{local.label}</Slider.Label>
        {local.valueVisible && <Slider.ValueLabel />}
      </div>
      <Slider.Track class="enn-slider-track">
        <Slider.Fill class="enn-slider-fill" />
        <Slider.Thumb class="enn-slider-thumb">
          <Slider.Input />
        </Slider.Thumb>
        {local.range && <Slider.Thumb class="enn-slider-thumb">
          <Slider.Input />
        </Slider.Thumb>}
      </Slider.Track>
    </Slider>
  </>
}

export const DSlider = Object.assign(Root, {})