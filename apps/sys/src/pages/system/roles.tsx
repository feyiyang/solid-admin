import { type Component, createEffect } from 'solid-js'
import { DAlertDialog, DButton, DInput, DSelect, DSwitch, DTable } from 'dlibs'
import { settingServe } from '@/service'
import './style.less'

const [rolesStats, setRolesStats] = createStore({
  sys_normal_disable: []
})
const Roles: Component<any> = () => {
  let diaRef: any
  const [activeItem, setActiveItem] = createStore<{setChecked?: any, cell: any, to?: boolean}>({setChecked: undefined, to: false, cell: null})
  const [sysNODRes] = settingServe.sysNOD()
  const [rList] = settingServe.rolesList()
  const [tableData, setTableData] = createSignal([])
  const [confirmVisible, setConfirmVisible] = createSignal(false)
  createEffect(() => {
    setRolesStats(
      produce((state) => {
        state.sys_normal_disable = sysNODRes() as any
      })
    )
  })
  createEffect(() => {
    if (!rList.loading) {
      setTableData(rList() as any)
    }
  })
  return (
    <div class="page-roles-manage">
      <form class="enn-search-form">
        <div class="form-item pr-4">
          <span class="label">角色名称</span>
          <DInput.Root>
            <DInput.Input />
          </DInput.Root>
        </div>
        <div class="form-item pr-4">
          <span class="label">权限字符</span>
          <DInput.Root>
            <DInput.Input />
          </DInput.Root>
        </div>
        <div class="form-item pr-4">
          <span class="label">状态</span>
          <DSelect.Root
            placeholder="请选择"
            options={rolesStats.sys_normal_disable}
            optionValue="dictValue"
            optionTextValue="dictLabel"
            itemComponent={(props) => (
              <DSelect.Option item={props.item} label={props.item.rawValue.dictLabel} />
            )}
          >
            <DSelect.Option value="1">启用</DSelect.Option>
            <DSelect.Option value="2">禁用</DSelect.Option>
          </DSelect.Root>
        </div>
        <DButton.Root type="primary" size="sm" outline>
          搜索
        </DButton.Root>
      </form>
      <section class="enn-search-result">
        <DTable.Root class="list_wrap" data={tableData()}>
          <DTable.Columns title="角色编号" field="roleId" width={80} />
          <DTable.Columns title="角色名称" field="roleName" />
          <DTable.Columns title="权限字符" field="roleKey" />
          <DTable.Columns title="显示顺序" field="roleSort" width={200} />
          <DTable.Columns class="switch" title="状态" field="status" width={200}>
            {(cell: any) => {
              const [checked, setChecked] = createSignal(cell.status === '0')
              return (
                <DSwitch
                  class="p-0"
                  defaultChecked={cell.status === '0'}
                  checked={checked()}
                  onChange={(ck: boolean) => {
                    setConfirmVisible(true)
                    setActiveItem({
                      setChecked,
                      cell,
                      to: ck
                    })
                  }}
                />
              )
            }}
          </DTable.Columns>
          <DTable.Columns title="创建时间" field="createTime" width={220} />
          <DTable.Columns title="操作" field="operate" width={160}>
            {(cell: any) => {
              return (
                <div class="flex justify-center">
                  <DButton.Root
                    class="pl-0"
                    link
                    onClick={() => {
                      setActiveItem({
                        cell
                      })
                      // setDialogVisible(true)
                    }}
                  >编辑</DButton.Root>
                  <DButton.Root
                    link
                    onClick={() => {
                      // setDialogVisible(true)
                    }}
                  >删除</DButton.Root>
                </div>
              )
            }}
          </DTable.Columns>
        </DTable.Root>
      </section>
      <DAlertDialog
        ref={diaRef}
        title="系统提示"
        maskClosable={false}
        open={confirmVisible()}
        onOpenChange={setConfirmVisible}
        onCancel={() => {
          setConfirmVisible(false)
        }}
        onOk={() => {
          activeItem.setChecked(activeItem.to)
          setConfirmVisible(false)
        }}
      >
        <i class="icon-[tdesign--error-circle] text-warning" /> 确认要"{activeItem?.to ? '启用' : '停用'}""{activeItem?.cell?.roleName}"角色吗？
      </DAlertDialog>
    </div>
  )
}

export default Roles
