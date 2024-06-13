import type { Component, ComponentProps } from 'solid-js'
import { ErrorBoundary, For } from 'solid-js'
import { DMenu } from 'dlibs'
import { roleServe } from '../service'
import './style.less'

const [collapse, setCollapse] = createSignal(false)
const mainLayout: Component<ComponentProps<'div'>> = (props) => {
  const menuData = roleServe.menus()
  return (
    <div class="enn-container">
      <aside class="enn-aside">{mainMenu(menuData)}</aside>
      <section class="enn-main">
        <header>
          <div class="enn-navbar">
            <div class="flex-none">
              <button class="enn-btn enn-btn-ghost" onClick={() => setCollapse(!collapse())}>
                <i class="icon-[tdesign--indent-left] w-[18px] h-[18px] text-gray-500" />
              </button>
            </div>
            <div class="flex-1">
              <a class="enn-btn enn-btn-ghost enn-text-xl">首页 </a>
            </div>
            <div class="flex-none">
              <button class="enn-btn enn-btn-square enn-btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <main class="enn-content">
          <ErrorBoundary
            fallback={(err, reset) => <div onClick={reset}>Error: {err.toString()}</div>}
          >
            {props.children}
          </ErrorBoundary>
        </main>
      </section>
    </div>
  )
}

function mainMenu(menus: any) {
  let defOpened, defActive
  const pathActive = location.pathname.split('/')
  if (pathActive.length > 1) {
    defOpened = [pathActive[1]]
    defActive = pathActive[pathActive.length - 1]
  }
  return (
    <DMenu.Root
      classList={{ collapsed: collapse() }}
      defaultExpand={defOpened}
      defaultActive={defActive}
      collapse={collapse}
      select={menuValueChg}
    >
      <For each={menus()}>
        {(menu) => {
          if (menu?.children?.length) {
            return subMenu(menu)
          }
          return (
            <DMenu.Item index={menu.name} data-tip={menu.meta.title} href={`/${menu.name}`}>
              <i class={`w-[16px] h-[18px] ${menu.meta.icon}`} />
              {!collapse() && menu.meta.title}
            </DMenu.Item>
          )
        }}
      </For>
    </DMenu.Root>
  )
}

function subMenu(menu: any, parentIndex?: string) {
  return (
    <DMenu.Sub index={menu.name}>
      <DMenu.Trigger>
        <i class={`w-[16px] h-[18px] ${menu.meta.icon}`} />
        {(!collapse() || parentIndex) && menu.meta.title}
      </DMenu.Trigger>
      <For each={menu.children}>
        {(submenu) => {
          let ind = typeof parentIndex === 'undefined' ? '' : `${parentIndex}/`
          if (submenu.children?.length) {
            return subMenu(submenu, menu.name)
          }
          ind += `${menu.name}/${submenu.name}`
          return (
            <DMenu.Item index={ind} href={`/${ind}`}>
              <i class={`w-[16px] h-[18px] ${submenu.meta.icon}`} />
              {submenu.meta.title}
            </DMenu.Item>
          )
        }}
      </For>
    </DMenu.Sub>
  )
}

function menuValueChg(data: string) {
  console.log(data)
}

export default mainLayout
