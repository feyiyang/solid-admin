/* eslint-disable no-useless-escape, solid/no-innerhtml */
import { type Component, Show, createContext } from 'solid-js'
import { Portal } from 'solid-js/web'
import { produce } from 'solid-js/store'
import { DButton, DDialog, DInput, DRadioGroup, DToast, DTreeView } from 'dlibs'

const ModalMenuContext = createContext<any>()

const [dlgState, setDlgState] = createStore({
  visible: false,
  loading: false,
  iconSelected: '',
  dropOpenIndex: 0,
  isBtn: false
})

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
function useModalMenu<T>() {
  return useContext<T>(ModalMenuContext)
}

const [menuSelected, setMenuSelected] = createSignal({ menuName: '主菜单', menuId: '0', value: 0 })
export const ModalMenu: Component<any> = (props) => {
  const [local] = splitProps(props, ['tableData', 'menuData', 'openData'])
  const [state, { setShow }] = useModalMenu<any>()

  type menuItemT = (typeof local.menuData)[0]

  if (local.openData) {
    setDlgState(
      produce((state) => {
        state.isBtn = local.openData.menuType === 'F'
      })
    )
  }

  return (
    <>
      <DDialog.Root
        class="enn-menus-dialog"
        title="添加菜单"
        modal={true}
        open={state.modalMenuShow}
        onOpenChange={setShow}
      >
        <DRadioGroup.Root
          class="form-item pb-2"
          defaultValue={local.openData.menuType || 'M'}
          onChange={(val: string) => {
            setDlgState(
              produce((state) => {
                state.isBtn = val === 'F'
              })
            )
          }}
        >
          <DRadioGroup.GroupLabel class="label">菜单类型:</DRadioGroup.GroupLabel>
          <DRadioGroup.Radio value="M">目录</DRadioGroup.Radio>
          <DRadioGroup.Radio value="C">菜单</DRadioGroup.Radio>
          <DRadioGroup.Radio value="F">按钮</DRadioGroup.Radio>
        </DRadioGroup.Root>
        <div class="form-item pb-4">
          <span class="label">上级菜单:</span>
          <div class="menu-parent enn-dropdown">
            <DInput.Root class="flex-1" role="button">
              <DInput.Input value={menuSelected()?.menuName} />
            </DInput.Root>
            <div class="menu-tree enn-dropdown-content">
              <DTreeView<any>
                data={[{ menuName: '主菜单', menuId: '000', children: local.tableData }]}
                idName="menuId"
                labelName="menuName"
                onSelectionChange={(D: any) => selectionChg<menuItemT>(D, local.menuData)}
              />
            </div>
          </div>
        </div>
        <div class="form-item pb-4" hidden={dlgState.isBtn}>
          <span class="label">菜单图标:</span>
          <div
            class="icon-parent enn-dropdown"
            classList={{ 'enn-dropdown-open': dlgState.dropOpenIndex === 2 }}
          >
            <DInput.Root
              class="flex-1 whitespace-nowrap"
              role="button"
              onClick={() => setDlgState('dropOpenIndex', 2)}
            >
              {!!dlgState.iconSelected && (
                <>
                  <span class={`w-6 h-6 icon-\[tdesign--${dlgState.iconSelected}\]`} />
                  {dlgState.iconSelected}
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
                <li>
                  <span class="icon-[tdesign--activity]" />
                  activity
                </li>
                <li>
                  <span class="icon-[tdesign--add]" />
                  add
                </li>
                <li>
                  <span class="icon-[tdesign--add-and-subtract]" />
                  and-subtract
                </li>
                <li>
                  <span class="icon-[tdesign--add-circle]" />
                  add-circle
                </li>
                <li>
                  <span class="icon-[tdesign--add-rectangle]" />
                  add-rectangle
                </li>
                <li>
                  <span class="icon-[tdesign--address-book]" />
                  address-book
                </li>
                <li>
                  <span class="icon-[tdesign--adjustment]" />
                  adjustment
                </li>
                <li>
                  <span class="icon-[tdesign--airplay-wave]" />
                  airplay-wave
                </li>
                <li>
                  <span class="icon-[tdesign--alarm]" />
                  alarm
                </li>
                <li>
                  <span class="icon-[tdesign--alarm-add]" />
                  alarm-add
                </li>
                <li>
                  <span class="icon-[tdesign--alarm-off]" />
                  alarm-off
                </li>
                <li>
                  <span class="icon-[tdesign--align-top]" />
                  align-top
                </li>
                <li>
                  <span class="icon-[tdesign--system-regulation]" />
                  system-regulation
                </li>
                <li>
                  <span class="icon-[tdesign--work]" />
                  work
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="form-item pb-4 menus-name">
          <span class="label">菜单名称:</span>
          <DInput.Root class="w206">
            <DInput.Input name="menuName" value={local.openData.menuName || ''} />
          </DInput.Root>
          <span class="label ml-8">显示排序:</span>
          <DInput.Root class="w206">
            <DInput.Input name="menuSort" type="number" value={local.openData.orderNum} />
          </DInput.Root>
        </div>
        <div class="form-item pb-2" hidden={dlgState.isBtn}>
          <span class="label">是否外链:</span>
          <DRadioGroup.Root class="flex items-center w206 mr-8" defaultValue="2">
            <DRadioGroup.Radio value="1">是</DRadioGroup.Radio>
            <DRadioGroup.Radio value="2">否</DRadioGroup.Radio>
          </DRadioGroup.Root>
          <span class="label">路由地址:</span>
          <DInput.Root class="w206">
            <DInput.Input />
          </DInput.Root>
        </div>
        <div class="form-item">
          {!dlgState.isBtn && (
            <>
              <span class="label">显示状态:</span>
              <DRadioGroup.Root
                class="flex items-center w206 mr-8"
                defaultValue={local.openData.visible || '0'}
              >
                <DRadioGroup.Radio value="0">显示</DRadioGroup.Radio>
                <DRadioGroup.Radio value="1">隐藏</DRadioGroup.Radio>
              </DRadioGroup.Root>
            </>
          )}
          {dlgState.isBtn && (
            <>
              <span class="label">权限字符:</span>
              {local.openData.prems}
              <DInput.Root class="flex items-center w206 mr-8" value={local.openData.perms}>
                <DInput.Input />
              </DInput.Root>
            </>
          )}
          <span class="label">菜单状态:</span>
          <DRadioGroup.Root
            class="flex items-center w206"
            defaultValue={local.openData.states || '0'}
          >
            <DRadioGroup.Radio value="0">正常</DRadioGroup.Radio>
            <DRadioGroup.Radio value="1">停用</DRadioGroup.Radio>
          </DRadioGroup.Root>
        </div>
        <DDialog.Footer>
          <DButton.Root class="w-16" size="sm" onClick={() => setShow(false)}>
            取消
          </DButton.Root>
          &ensp;
          <DButton.Root class="w-16 ml-4" size="sm" type="primary" onClick={() => saveHdl(setShow)}>
            <Show when={dlgState.loading} fallback={<>确定</>}>
              <span class="enn-loading loading-spinner enn-loading-sm" />
              <Portal>
                <div class="modal-mask" />
              </Portal>
            </Show>
          </DButton.Root>
        </DDialog.Footer>
      </DDialog.Root>
      <DToast.Region duration={3000}>
        <DToast.List />
      </DToast.Region>
    </>
  )
}

function selectionChg<T>(D: any, M: T[]): void {
  if (D.focusedValue === '000') {
    setMenuSelected({
      menuId: '0',
      menuName: '主菜单',
      value: '0'
    } as any)
    return
  }
  const S = M.find((v: any) => {
    return v.menuId === D.focusedValue
  })
  setMenuSelected(S as any)
}
function iconClick(e: any) {
  setDlgState(
    produce((state) => {
      state.dropOpenIndex = 0
      state.iconSelected = e.target.textContent
    })
  )
  e.cancelButtle = true
  e.preventDefault()
}
function saveHdl(show: any) {
  setDlgState('loading', true)
  setTimeout(() => {
    setDlgState('loading', false)
    show(false)
    DToast.show({ message: '仅演示，无数据操作!', type: 'success' })
  }, 2200)
}
