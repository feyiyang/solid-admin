import {
  Component,
  ComponentProps,
  Index,
  JSXElement,
  Match,
  Show,
  Switch,
  children,
  createSignal,
  mergeProps,
  splitProps
} from 'solid-js'
import {
  Accordion,
  Menu,
  Tooltip,
  MenuRootProps as arkMenuProps
} from '@ark-ui/solid'
import { Dynamic, Portal } from 'solid-js/web'

const variants = {
  mode: {
    horizontal: 'menu-hor',
    vertical: 'menu-ver',
    inline: 'menu-inl'
  }
}

type MenuProps = ComponentProps<'div'> &
  arkMenuProps & {
    mode?: keyof typeof variants.mode
    inlineCollapsed?: boolean
    items?: {
      key?: string
      label?: string
      icon?: JSXElement
      children?: MenuProps['items'][]
      [k: string]: any
    }
  }

const Menus: Component<MenuProps> = (props) => {
  // const menuItems = children(() => props.children)
  // console.log(menuItems.toArray())
  const [isVertical, setVertical] = createSignal(false)
  const merged = mergeProps({ mode: 'vertical' }, props)
  const [local, rest] = splitProps(merged, [
    'mode',
    'class',
    'ref',
    'style',
    'inlineCollapsed'
  ])
  const icollapsed = () => !!props.inlineCollapsed

  const clazzName = `chai-menu chai-${(variants.mode as any)[local.mode]} ${local.class || ''}`
  setVertical(local.mode == 'vertical')

  const HMenu: Component<any> = (props) => {
    const [local, rest] = splitProps(props, ['items'])
    return (
      <Index each={local.items}>
        {(item, i) => (
          <Menu.Root
            onPointerDownOutside={(e) => {
              e.preventDefault()
            }}
          >
            {item().children?.length ? (
              <SubMenu subs={item()} />
            ) : (
              <Menu.Trigger
                class="chai-m-item"
                id={item().key}
                disabled={item().disabled}
              >
                {item().label}
              </Menu.Trigger>
            )}
          </Menu.Root>
        )}
      </Index>
    )
  }

  const [openVal, setOpen] = createSignal<string[]>([])
  const [actives, setActive] = createSignal<string[]>([])
  const [activePath, setActivePath] = createSignal<string>('')
  const VMenu: Component<any> = (props) => {
    const [local, rest] = splitProps(props, ['items', 'nested', 'keyPath'])
    return (
      <Accordion.Root value={openVal()} multiple present>
        <Index each={local.items}>
          {(item, i) => {
            const [isOpen, setIsOpen] = createSignal(false)
            let keyPath: string = (local.keyPath || ' ') + ' ' + item().key
            keyPath = keyPath.trim()
            return (
              <Show
                when={item().children?.length}
                fallback={
                  <Dynamic
                    component={
                      item().custom ||
                      ((props: ComponentProps<any>) => <div {...props}></div>)
                    }
                    class={`chai-menu-itm ${actives().indexOf(item().key) > -1 ? 'actived' : ''}`}
                    onClick={[
                      itemClick,
                      {
                        data: item(),
                        fn: props.onClick,
                        parent: local.nested,
                        keyPath
                      }
                    ]}
                    onMouseEnter={() => setIsOpen(icollapsed())}
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    <Tooltip.Root
                      open={isOpen()}
                      positioning={{
                        placement: 'right',
                        gutter: 16
                      }}
                    >
                      <span class="chai-menu-icon">{item().icon}</span>
                      <span class="chai-menu-label">
                        {!icollapsed() && item().label}
                      </span>
                      <Tooltip.Trigger />
                      <Tooltip.Positioner>
                        <Tooltip.Content class="tooltip-content">
                          <div class="px-[8px] py-[4px] bg-gray-800 text-white rounded">
                            {item().label}
                          </div>
                        </Tooltip.Content>
                        <Tooltip.Arrow>
                          <Tooltip.ArrowTip class="bg-gray-800" />
                        </Tooltip.Arrow>
                      </Tooltip.Positioner>
                    </Tooltip.Root>
                  </Dynamic>
                }
              >
                <Accordion.Item class="chai-menu-sub-root" value={item().key}>
                  <Tooltip.Root
                    open={isOpen()}
                    positioning={{
                      placement: 'right',
                      gutter: 16
                    }}
                  >
                    <MenuTriggerItem
                      classList={{
                        actived: activePath().indexOf(item().key + ' ') > -1
                      }}
                      m={item()}
                      keyPath={keyPath}
                      onMouseEnter={() => setIsOpen(icollapsed())}
                      onMouseLeave={() => setIsOpen(false)}
                    >
                      <Tooltip.Trigger />
                    </MenuTriggerItem>

                    <Portal>
                      <Tooltip.Positioner>
                        <Tooltip.Content class="tooltip-content">
                          <div class="px-[8px] py-[4px] bg-gray-800 text-white rounded">
                            {item().label}
                          </div>
                        </Tooltip.Content>
                        <Tooltip.Arrow>
                          <Tooltip.ArrowTip class="bg-gray-800" />
                        </Tooltip.Arrow>
                      </Tooltip.Positioner>
                    </Portal>
                  </Tooltip.Root>
                  <div
                    classList={{
                      'chai-menu-box': true,
                      'chai-menu-sub': local.nested,
                      folded: openVal().indexOf(item().key) == -1
                    }}
                  >
                    <VMenu
                      items={item().children}
                      nested={item()}
                      keyPath={keyPath}
                      {...rest}
                    />
                  </div>
                </Accordion.Item>
              </Show>
            )
          }}
        </Index>
      </Accordion.Root>
    )
  }

  const IMenu: Component<any> = (props) => {
    const [local, rest] = splitProps(props, ['items', 'nested', 'keyPath'])
    return (
      <>
        <Index each={local.items}>
          {(itm, ind) => {
            let keyPath: string = (local.keyPath || ' ') + ' ' + itm().key
            keyPath = keyPath.trim()
            if (!local.keyPath && itm().children?.length) {
              return (
                <Menu.Root positioning={{ placement: 'right-end' }}>
                  <Menu.Trigger
                    classList={{
                      'w-full': true,
                      'chai-menu-itm': true,
                      actived: activePath().split(' ').indexOf(itm().key) > -1
                    }}
                  >
                    <span class="chai-menu-icon">{itm().icon}</span>
                    <span class="chai-menu-label">
                      {!icollapsed() && itm().label}
                    </span>
                    {!icollapsed() && <i class="i-tdesign-chevron-right"></i>}
                  </Menu.Trigger>

                  <Menu.Positioner class="chai-menu-box">
                    <Menu.Content>
                      <IMenu
                        items={itm().children}
                        keyPath={keyPath}
                        {...rest}
                      />
                    </Menu.Content>
                  </Menu.Positioner>
                </Menu.Root>
              )
            }
            if (local.keyPath && !itm().children?.length) {
              return (
                <Menu.Item
                  id={itm().key}
                  classList={{
                    'chai-menu-itm': true,
                    actived: activePath().split(' ').indexOf(itm().key) > -1
                  }}
                  onClick={() => setActivePath(keyPath)}
                >
                  <span class="chai-menu-icon">{itm().icon}</span>
                  <span class="chai-menu-label">{itm().label}</span>
                </Menu.Item>
              )
            }
            if (local.keyPath && itm().children?.length) {
              return (
                <Menu.Root>
                  <Menu.Trigger
                    classList={{
                      'chai-menu-itm': true,
                      actived: activePath().split(' ').indexOf(itm().key) > -1
                    }}
                  >
                    <span class="chai-menu-icon">{itm().icon}</span>
                    <span class="chai-menu-label">{itm().label}</span>
                  </Menu.Trigger>
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content>
                        <IMenu
                          nested={itm()}
                          items={itm().children}
                          keyPath={keyPath}
                          {...rest}
                        />
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                </Menu.Root>
              )
            }
            return (
              <Tooltip.Root positioning={{ placement: 'right', gutter: 12 }}>
                <Tooltip.Trigger class="w-full">
                  <div
                    classList={{
                      'chai-menu-itm': true,
                      actived: activePath().split(' ').indexOf(itm().key) > -1
                    }}
                    onClick={() => setActivePath(keyPath)}
                  >
                    <span class="chai-menu-icon">{itm().icon}</span>
                    <span class="chai-menu-label">
                      {!icollapsed() && itm().label}
                    </span>
                  </div>
                </Tooltip.Trigger>
                <Portal>
                  <Tooltip.Positioner>
                    <Tooltip.Content class="tooltip-content bg-gray-800 text-white px-[8px] py-[2px] rounded">
                      {itm().label}
                    </Tooltip.Content>
                    <Tooltip.Arrow>
                      <Tooltip.ArrowTip class="bg-gray-800" />
                    </Tooltip.Arrow>
                  </Tooltip.Positioner>
                </Portal>
              </Tooltip.Root>
            )
          }}
        </Index>
      </>
    )
  }

  const SubMenu: Component<any> = (props) => {
    const [local, rest] = splitProps(props, ['subs'])
    return (
      <Menu.Root>
        <Menu.TriggerItem class="chai-m-item">
          {local.subs.label}
        </Menu.TriggerItem>
        <Menu.Content class="chai-m-sub">
          <Index each={local.subs.children}>
            {(item, i) =>
              item().children?.length ? (
                <SubMenu subs={item()} />
              ) : (
                <Menu.Item
                  class="chai-m-item"
                  id={item().key}
                  closeOnSelect={!isVertical()}
                >
                  {item().label}
                </Menu.Item>
              )
            }
          </Index>
        </Menu.Content>
      </Menu.Root>
    )
  }

  const MenuTriggerItem: Component<any> = (props) => {
    const [local, rest] = splitProps(props, ['m', 'keyPath'])
    return (
      <div
        class="chai-menu-itm trigger"
        onClick={[toggleOpen, { k: local.m.key, p: local.keyPath }]}
        {...rest}
      >
        <span class="chai-menu-icon">{local.m.icon}</span>
        <span class="chai-menu-label">{!icollapsed() && local.m.label}</span>
        <Show when={!icollapsed()}>
          <Accordion.ItemIndicator
            class={`chai-menu-arrow i-tdesign-chevron-down`}
          ></Accordion.ItemIndicator>
        </Show>
        {props.children}
      </div>
    )
  }

  return (
    <div
      class={clazzName}
      classList={{ 'chai-collapsed': icollapsed() }}
      style={local.style}
    >
      {
        <Switch fallback={<HMenu {...rest} />}>
          <Match when={icollapsed() && isVertical()}>
            <IMenu {...rest} />
          </Match>
          <Match when={isVertical()}>
            <VMenu {...rest} />
          </Match>
        </Switch>
        // <Show when={props.items?.length} fallback={<></>}>
        //   <Show when={isVertical()} fallback={<HMenu {...rest} />}>
        //     <VMenu {...rest} />
        //   </Show>
        // </Show>
      }
    </div>
  )

  function toggleOpen({ k, p }: { k?: string; p: string }) {
    let openCopy = JSON.parse(JSON.stringify(openVal()))
    const opened = openCopy.indexOf(k)
    if (opened > -1) {
      openCopy.splice(opened, 1)
    } else {
      // openCopy.push(k)
      openCopy = [...p.split(' ')]
    }
    setOpen(openCopy)
  }

  function itemClick({
    data,
    fn,
    keyPath
  }: {
    data: any
    fn?: (d: any) => void
    keyPath: string
  }) {
    setActive([data.key])
    setActivePath(keyPath)
    fn && fn(data)
  }
}

export const MenuItem: Component<any> = (props) => {
  return {componentName: 'menuItem', ...props} as unknown as JSXElement
}

export { Menus }
