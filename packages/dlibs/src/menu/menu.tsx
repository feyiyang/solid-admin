import type { Component } from 'solid-js'
import { createSignal, splitProps, mergeProps, createEffect } from 'solid-js'
import { Menubar } from '@kobalte/core'
import { MenuContext, useMenuContext } from './menu-context.tsx'
import type { MenuComp, MenuItemComp } from './constant'
import { defMenu } from './constant'
import { Slot, getSlots } from '../../utils/slot.tsx'

const Root: Component<MenuComp> = (props) => {
  const [activMenu, setActiveMenu] = createSignal<string | string[]>('')
  const merged = mergeProps(defMenu, props)
  const [local, rest] = splitProps(merged, [
    'class',
    'collapse',
    'select',
    'router'
  ])
  let clazz = `enn-menu`

  if (local.class) {
    clazz += ' ' + local.class
  }

  return (
    <MenuContext.Provider
      value={{
        actived: activMenu,
        setAct: setActiveMenu,
        collapsed: local.collapse,
        selector: local.select,
        router: local.router
      }}
    >
      <Menubar.Root as="ul" class={clazz} {...rest} />
    </MenuContext.Provider>
  )
}

const Item: Component<MenuItemComp> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'index', 'onSelect'])
  const { actived, selector, setAct, collapsed } = useMenuContext()
  const path = local.index
  const name = path?.replace(/\w+\//g, '').trim()
  const clazz = `enn-menu-item ${local.class || ''}`
  return (
    <li class={clazz}>
      <Menubar.Menu>
        <Menubar.Item
          classList={{
            active: actived() == name,
            'enn-tooltip': collapsed(),
            'enn-tooltip-right': collapsed()
          }}
          as="a"
          onSelect={onSelectFn}
          {...rest}
        ></Menubar.Item>
      </Menubar.Menu>
    </li>
  )
  function onSelectFn() {
    local.onSelect && local.onSelect()
    selector && selector(path)
    setAct(name)
  }
}

const Trigger: Component<any> = (props) => {
  return <Slot name="trigger" {...props}></Slot>
}

const Sub = (props: any) => {
  let timer: any = null
  // const [local] = splitProps(props, ['index', 'class'])
  const slots = getSlots(props.children)
  const [subShow, setSubShow] = createSignal(false)
  const { collapsed } = useMenuContext()
  let detailRef: any = null
  createEffect(() => {
    onFocu(!collapsed(), 0)
    detailRef.open = false
  })
  return (
    <li onmouseover={() => onFocu(true)} onmouseout={() => onFocu(false, 200)}>
      <details
        class={`${collapsed() ? 'enn-dropdown enn-dropdown-right' : ''}`}
        ref={detailRef}
        open={subShow()}
      >
        <summary class="enn-menu-item">{slots.trigger}</summary>
        <ul
          classList={{
            'enn-dropdown-content': collapsed(),
            'z-[1]': true,
            'enn-menu': true,
            isopen: subShow()
          }}
        >
          {slots.default}
        </ul>
      </details>
    </li>
  )
  function onFocu(Bol: boolean, delay?: number) {
    const lo: number = delay || 20
    if (!collapsed()) return
    clearTimeout(timer)
    timer = setTimeout(() => {
      setSubShow(Bol)
    }, lo)
  }
}

export const DMenu = {
  Root,
  Item,
  Sub,
  Trigger
}
