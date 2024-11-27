import { type Component, createEffect } from 'solid-js'
import { DButton, DInput, DSelect, DTable } from 'dlibs'
import { settingServe } from '@/service'
import './style.less'

const [deptStats, setDeptStats] = createStore({
  user_sex: [],
  depart_tree: [],
  sys_normal_disable: []
})
const User: Component<any> = () => {
  const [sexRes] = settingServe.userSex()
  const [sysNODRes] = settingServe.sysNOD()
  const [uList] = settingServe.userList()
  const [tableData, setTableData] = createSignal([])
  createEffect(() => {
    setDeptStats(
      produce((state) => {
        state.user_sex = sexRes() as any
        state.sys_normal_disable = sysNODRes() as any
      })
    )
  })
  createEffect(() => {
    if (!uList.loading) {
      setTableData(uList() as any)
    }
  })
  return (
    <div class="page-dept-manage">
      <form class="enn-search-form">
        <div class="form-item pr-4">
          <span class="label">用户名称</span>
          <DInput.Root>
            <DInput.Input />
          </DInput.Root>
        </div>
        <div class="form-item pr-4">
          <span class="label">状态</span>
          <DSelect.Root
            class="w-32"
            placeholder="请选择"
            options={deptStats.sys_normal_disable}
            optionValue="dictValue"
            optionTextValue="dictLabel"
            itemComponent={(props: any) => (
              <DSelect.Option item={props.item} label={props.item.rawValue.dictLabel} />
            )}
          />
        </div>
        <div class="form-item pr-4">
          <span class="label">手机号码</span>
          <DInput.Root>
            <DInput.Input />
          </DInput.Root>
        </div>
        <DButton.Root type="primary" size="sm" outline>
          搜索
        </DButton.Root>
      </form>
      <section class="p-4">
        <DTable.Root data={tableData()}>
          <DTable.Columns title="用户编号" field="userId" width={80} />
          <DTable.Columns title="用户名称" field="userName" width={200} />
          <DTable.Columns title="用户昵称" field="nickName" width={200} />
          <DTable.Columns title="部门" field="dept.deptName" width={200} />
        </DTable.Root>
      </section>
    </div>
  )
}

export default User
