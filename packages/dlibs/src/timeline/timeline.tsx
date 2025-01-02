import { mergeProps, splitProps, type Component, type ComponentProps } from "solid-js"
import { defProps } from "./constant"

const Root: Component<ComponentProps<any>> = (props) => {
  const merged = mergeProps(defProps, props)
  const [local, rest] = splitProps(merged, ["class", 'layout', 'mode'])
  const clazz = `enn-timeline enn-timeline-vertical${local.mode == 'same' ? ' enn-timeline-compact' : ''} ${local.class || ''}`
  
  return (
    <ul class={clazz} {...rest} />
  )
}

const Item = (props: ComponentProps<any>) => {
  const [local] = splitProps(props, ["class", 'label', 'icon'])
  const icon = () => {
    switch (typeof local.icon) {
      case 'undefined':
        return <span class="icon-def icon-[tdesign--circle]" />
      case 'string':
        return <span class={local.icon} />
      default:
        return local.icon
    }
  }
  return (
    <li class="enn-timeline-item">
      <hr />
      <div class="enn-timeline-start enn-timeline-label">{local.label}</div>
      <div class="enn-timeline-middle leading-none">
        {icon()}
      </div>
      <div class="enn-timeline-end enn-timeline-content">{props.children}</div>
      <hr />
    </li>
  )
}

export const DTimeline = Object.assign(Root, {
  Item
})