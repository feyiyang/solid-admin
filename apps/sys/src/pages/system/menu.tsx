import { type Component, createEffect, onMount } from 'solid-js'
import { TabulatorFull as Tabulator } from 'tabulator-tables'
import { DButton, DInput, DSelect } from 'dlibs'
import { ModalMenu, ModalMenuProvider } from './modalMenu'
import { settingServe } from '@/service'
import 'tabulator-tables/dist/css/tabulator_semanticui.min.css'
import './style.less'

interface Item {
  value: string
  label: string
  disabled?: boolean
}
const MenuListSet: Component<any> = () => {
  const [menuRes] = settingServe.menus({ roleType: 1, t: Date.now() })
  const options: Item[] = [
    { label: '正常', value: '0', disabled: false },
    { label: '异常', value: '1' }
  ]
  const [modalMenuShow, setMenuModalShow] = createSignal(false)
  const [tableData, setTableData] = createStore([])
  onMount(() => {
    const table = new Tabulator('#tableEle', {
      layout: 'fitColumns',
      dataTree: true,
      dataTreeChildField: 'children',
      dataTreeElementColumn: 'menuName',
      dataTreeCollapseElement: '<span class="icon-[tdesign--chevron-down] cursor-pointer"></span>',
      dataTreeExpandElement: '<span class="icon-[tdesign--chevron-right] cursor-pointer"></span>',
      dataTreeBranchElement: '<i></i>',
      dataTreeChildIndent: 18,
      selectableRows: false,
      responsiveLayout: true,
      columns: [
        { title: '菜单名称', field: 'menuName', headerSort: false },
        { title: '排序', field: 'orderNum', width: 80 },
        { title: '权限标识', field: 'perms', headerSort: false, width: 200 },
        { title: '组件路径', field: 'component', headerSort: false, width: 200 },
        {
          title: '状态',
          field: 'status',
          headerSort: false,
          width: 80,
          formatter: (cell) =>
            (cell.getValue() ? (
              <span class="enn-badge enn-badge-primary">正常</span>
            ) : (
              <span class="enn-badge">异常</span>
            )) as any
        },
        { title: '创建时间', field: 'createTime', width: 180 },
        {
          title: '操作',
          headerSort: false,
          width: 160,
          formatter: () => {
            return (
              <div class="handlers">
                <span class="btn btn-edit">编辑</span>
                <span class="btn btn-add">新增</span>
                <span class="btn btn-del">删除</span>
              </div>
            ) as any
          }
        }
      ]
    })
    // table.on('rowClick', (e, row) => {
    //   console.log(row.getData())
    // })
    createEffect(() => {
      if (!menuRes.loading) {
        const ret = treeMaker(menuRes() as [])
        setTableData(ret)
        table.setData(ret)
      }
    })
  })
  return (
    <div class="page-menu-manage">
      <section class="enn-search-form flex">
        <div class="form-item pr-4">
          <span class="label">菜单名称</span>
          <DInput.Root>
            <DInput.Input placeholder="请输入菜单名称" />
          </DInput.Root>
        </div>
        <div class="form-item pr-4">
          <span class="label">状态</span>
          <DSelect.Root
            class="w-32"
            placeholder="请选择"
            options={options}
            itemComponent={(props) => (
              <DSelect.Option item={props.item} label={props.item.rawValue.label} />
            )}
          />
        </div>
        <DButton.Root type="primary" size="sm" outline>
          搜索
        </DButton.Root>
        <div class="w-full" />
        <DButton.Root type="primary" size="sm" onClick={() => setMenuModalShow(true)}>
          <span class="icon-[tdesign--add]" />
          新增
        </DButton.Root>
      </section>
      <section class="enn-search-result">
        <div id="tableEle" />
      </section>
      {modalMenuShow() && (
        <ModalMenuProvider modalMenuShow={modalMenuShow()} setShow={setMenuModalShow}>
          <ModalMenu tableData={tableData} menuData={menuRes()} />
        </ModalMenuProvider>
      )}
    </div>
  )
}

function treeMaker(data: any[], pid: string | number = 0) {
  const ret: any = []
  data.forEach((v) => {
    if (v.parentId === pid) {
      v.children = treeMaker(data, v.menuId)
      if (!v.children?.length) {
        delete v.children
      }
      ret.push(v)
    }
  })
  return ret
}

export default MenuListSet
