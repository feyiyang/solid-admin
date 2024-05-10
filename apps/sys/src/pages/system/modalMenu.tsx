import { type Component, Show, createContext } from 'solid-js'
import { Portal } from 'solid-js/web'
import { DButton, DDialog, DInput, DRadio, DTreeView } from 'dlibs'

const ModalMenuContext = createContext()

const [dropOpen, setDropOpen] = createSignal(0)
const [iconSelected, setIconSelect] = createSignal('')
const [Load, setLoad] = createSignal(false)

export const ModalMenuProvider = (props: any) => {
  const [state, setState] = createStore({ modalMenuShow: props.modalMenuShow })
  const store = [
    state,
    {
      setShow: () => {
        setState('modalMenuShow', (show: boolean) => {
          props.setShow(!show)
          return !show
        })
      }
    }
  ]
  return <ModalMenuContext.Provider value={store}>{props.children}</ModalMenuContext.Provider>
}
function useModalMenu(): any {
  return useContext(ModalMenuContext)
}

const [menuSelected, setMenuSelected] = createSignal({ menuName: '主菜单' })
export const ModalMenu: Component<any> = (props) => {
  const [local] = splitProps(props, ['tableData', 'menuData'])
  const [state, { setShow }] = useModalMenu()

  type menuItemT = (typeof local.menuData)[0]
  return (
    <DDialog.Root
      class="enn-menus-dialog mt-[1vh]"
      title="添加菜单"
      modal={true}
      open={state.modalMenuShow}
      onOpenChange={setShow}
    >
      <DRadio.Group class="form-item pb-2" defaultValue="1">
        <DRadio.GroupLabel class="label">菜单类型:</DRadio.GroupLabel>
        <DRadio.Radio value="1">目录</DRadio.Radio>
        <DRadio.Radio value="2">菜单</DRadio.Radio>
      </DRadio.Group>
      <div class="form-item pb-4">
        <span class="label">上级菜单:</span>
        <div class="menu-parent enn-dropdown">
          <DInput.Root class="flex-1" role="button">
            <DInput.Input value={menuSelected()?.menuName} />
          </DInput.Root>
          <div class="menu-tree enn-dropdown-content">
            {local.tableData.length > 0 && (
              <DTreeView
                data={[{ menuName: '主菜单', menuId: '0', value: '0', children: local.tableData }]}
                idName="menuId"
                labelName="menuName"
                onSelectionChange={(D) => selectionChg<menuItemT>(D, local.menuData)}
              />
            )}
          </div>
        </div>
      </div>
      <div class="form-item pb-4">
        <span class="label">菜单图标:</span>
        <div class="icon-parent enn-dropdown" classList={{ 'enn-dropdown-open': dropOpen() === 2 }}>
          <DInput.Root class="flex-1" role="button" onClick={() => setDropOpen(2)}>
            {!!iconSelected() && (
              <>
                <span class={`w-4 h-4 icon-\[tdesign--${iconSelected()}\]`} />
                {iconSelected()}
              </>
            )}
            <DInput.Input readonly />
            <a
              class="underline"
              href="https://icon-sets.iconify.design/tdesign/?keyword=Td"
              target="_blank"
            >
              iconify/TD
            </a>
          </DInput.Root>
          <div class="icon-list enn-dropdown-content">
            <ul onClick={iconClick}>
              <li><span class="icon-[tdesign--activity]"></span>activity</li>
              <li><span class="icon-[tdesign--add]"></span>add</li>
              <li><span class="icon-[tdesign--add-and-subtract]"></span>and-subtract</li>
              <li><span class="icon-[tdesign--add-circle]"></span>add-circle</li>
              <li><span class="icon-[tdesign--add-rectangle]"></span>add-rectangle</li>
              <li><span class="icon-[tdesign--address-book]"></span>address-book</li>
              <li><span class="icon-[tdesign--adjustment]"></span>adjustment</li>
              <li><span class="icon-[tdesign--airplay-wave]"></span>airplay-wave</li>
              <li><span class="icon-[tdesign--alarm]"></span>alarm</li>
              <li><span class="icon-[tdesign--alarm-add]"></span>alarm-add</li>
              <li><span class="icon-[tdesign--alarm-off]"></span>alarm-off</li>
              <li><span class="icon-[tdesign--align-top]"></span>align-top</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="form-item pb-4 menus-name">
        <span class="label">菜单名称:</span>
        <DInput.Root class="w206">
          <DInput.Input name="menuName" />
        </DInput.Root>
        <span class="label ml-8">显式排序:</span>
        <DInput.Root class="w206">
          <DInput.Input name="menuSort" type="number" />
        </DInput.Root>
      </div>
      <div class="form-item pb-2">
        <span class="label">是否外链:</span>
        <DRadio.Group class="flex items-center w206 mr-8" defaultValue="2">
          <DRadio.Radio value="1">是</DRadio.Radio>
          <DRadio.Radio value="2">否</DRadio.Radio>
        </DRadio.Group>
        <span class="label">路由地址:</span>
        <DInput.Root class="w206">
          <DInput.Input />
        </DInput.Root>
      </div>
      <div class="form-item">
        <span class="label">显示状态:</span>
        <DRadio.Group class="flex items-center w206 mr-8" defaultValue="1">
          <DRadio.Radio value="1">显示</DRadio.Radio>
          <DRadio.Radio value="2">隐藏</DRadio.Radio>
        </DRadio.Group>
        <span class="label">菜单状态:</span>
        <DRadio.Group class="flex items-center w206" defaultValue="1">
          <DRadio.Radio value="1">正常</DRadio.Radio>
          <DRadio.Radio value="2">停用</DRadio.Radio>
        </DRadio.Group>
      </div>
      <DDialog.Footer>
        <DButton.Root class="w-16" size="sm" onClick={() => setShow(false)}>
          取消
        </DButton.Root>
        &ensp;
        <DButton.Root class="w-16 ml-4" size="sm" type="primary" onClick={saveHdl}>
          <Show when={Load()} fallback={<>确定</>}>
            <span class="enn-loading loading-spinner enn-loading-sm" />
            <Portal>
              <div class="modal-mask" />
            </Portal>
          </Show>
        </DButton.Root>
      </DDialog.Footer>
    </DDialog.Root>
  )
}

function selectionChg<T>(D: any, M: T[]) {
  const S = M.find((v: any) => {
    return v.menuId === D.focusedId
  })
  setMenuSelected(S as any)
}
function iconClick(e: any) {
  setIconSelect(e.target.textContent)
  setDropOpen(0)
  e.cancelButtle = true
  e.preventDefault()
}
function saveHdl() {
  setLoad(true)
  setTimeout(() => setLoad(false), 22200)
}
