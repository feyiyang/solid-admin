import {
  Component,
  ComponentProps,
  children,
  createMemo,
  createResource,
  createSignal
} from 'solid-js'
import { A, useNavigate } from '@solidjs/router'
import { EYMenu, EYMenuItem } from 'libs'
import { fetchMenus } from '../../server/api'

let navigator: (d: any) => void
const MainLayout: Component<ComponentProps<'div'>> = (props) => {
  const cld = children(() => props.children)
  const [collapsed, setCollapsed] = createSignal(false)
  const [menuItemsData] = createResource(fetchMenus)

  navigator = useNavigate()
  const menuItems = createMemo(() => {
    let items = []
    if (menuItemsData.latest?.length) {
      items = setIcons(menuItemsData.latest)
    }
    return items
  })
  return (
    <>
      <div class="main-layout flex">
        <aside class="side-menu" style={{ width: collapsed() ? '62px' : '220px' }}>
          <EYMenu
            items={menuItems()}
            onClick={menuClick}
            inlineCollapsed={collapsed()}
          ></EYMenu>
          <EYMenu>
            <EYMenuItem />
          </EYMenu>
        </aside>
        <div class="layout-main">
          <header class="top-bar">
            <i class="menuctrl i-tdesign-menu-fold" onClick={() => setCollapsed(!collapsed())}></i>
          </header>
          <main class="contain-box">{cld()}</main>
        </div>
      </div>
    </>
  )
}

function setIcons(data: any, routePath?: string) {
  return data.map((v: any) => {
    v.path = (routePath ? (routePath + '/') : '') + v.path
    v.icon = <i class={v.icon} />
    // v.custom = (props: any) => <A href={v.path} {...props}></A>
    if (v.children) {
      v.children = setIcons(v.children, v.path)
    }
    return v
  })
}

function menuClick(d: any) {
  // console.log(d)
  navigator(d.path)
}


export default MainLayout
