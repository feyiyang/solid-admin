import { createContext, mergeProps, splitProps, useContext, type Component, type ComponentProps } from "solid-js"
import { Accordion } from "@kobalte/core"
import { defProps, collapseProps } from './constant'

const collapseCtx = createContext<any[]>([{arrow: true}])

const Root: Component<collapseProps & ComponentProps<'div'>> = (props) => {
  const merged = mergeProps(defProps, props)
  const [local, rest] = splitProps(merged, ["class", 'children', 'mutex', 'arrow'])
  return (
    <Accordion.Root class={`enn-collapse-root enn-join enn-join-vertical ${local.class || ''}`} collapsible multiple={!local.mutex} {...rest}>
      <collapseCtx.Provider value={[{arrow: local.arrow}]}>
        {props.children}
      </collapseCtx.Provider>
    </Accordion.Root>
  )
} 

const Item: Component<ComponentProps<any>> = (props: any) => {
  const [local, rest] = splitProps(props, ["class"])
  const [{arrow}] = useContext(collapseCtx)
  const calzz = `enn-collapse-item enn-join-item${arrow ? ' enn-collapse-arrow' : ''}${local.class ? ` ${local.class}` : ''}`
  if (!props.value) console.error('Accordion.Item 的 value 为空!!')
  return <Accordion.Item class={calzz} {...rest as any} />
}

const Title: Component<ComponentProps<any>> = (props) => {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <Accordion.Trigger class={`enn-collapse-title ${local.class || ''}`} as={Accordion.Header} {...rest} />
  )
}

const Content = (props: Accordion.AccordionContentProps) => <Accordion.Content class="enn-collapse-content" {...props} />

export const DCollapse = Object.assign(Root, {
  Item,
  Title,
  Content
})