import { type Component, createEffect, onMount } from 'solid-js'
import { TabulatorFull as Tabulator } from 'tabulator-tables'
import { DButton, DInput, DSelect } from 'dlibs'
import { settingServe } from '@/service'
import 'tabulator-tables/dist/css/tabulator_semanticui.min.css'
import './style.less'

const MenuListSet: Component<any> = () => {
  const [resData] = settingServe.menus({roleType: 1, t: Date.now()})
  onMount(() => {
    const table = new Tabulator('#tableEle', {
      // height: 'calc(100% - 70px)',
      layout: 'fitColumns',
      dataTree: true,
      dataTreeChildField: 'children',
      dataTreeElementColumn: 'menuName',
      dataTreeCollapseElement: '<span class="icon-[tdesign--chevron-down] cursor-pointer"></span>',
      dataTreeExpandElement: '<span class="icon-[tdesign--chevron-right] cursor-pointer"></span>',
      dataTreeBranchElement: '<i></i>',
      dataTreeChildIndent: 18,
      selectableRows: false,
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
          formatter: (cell) => {
            return cell.getValue() ? 
              <span class="enn-badge enn-badge-primary">正常</span> :
              <i class="enn-badge">异常</i>
          }
        },
        { title: '创建时间', field: 'createTime', width: 180 },
        { 
          title: '操作',
          headerSort: false,
          width: 160,
          formatter: () => {
            return <div class='handlers'>
              <span class='btn btn-edit'>编辑</span>
              <span class="btn btn-add">新增</span>
              <span class="btn btn-del">删除</span>
            </div>
          }
         }
      ]
    })
    table.on('rowClick', (e, row) => {
      console.log(row.getData())
    })
    createEffect(() => {
      if (!resData.loading) {
        table.setData(treeMaker(resData() as []))
      }
    })
  })
  return (
    <div class="page-menu-manage">
      <section class='enn-search-form'>
        <div class="form-item pr-4">
          <span class='label'>菜单名称</span>
          <DInput.Root>
            <DInput.Input placeholder='请输入菜单名称' />
          </DInput.Root>
        </div>
        <div class="form-item pr-4">
          <span class='label'>状态</span>
          <select class='enn-select enn-select-bordered enn-select-sm'>
            <option value="0">正常</option>
            <option value="1">异常</option>
          </select>
        </div>
        <DButton.Root type='primary' size='sm' outline>搜索</DButton.Root>
      </section>
      <section class='enn-search-result'>
        <div id="tableEle" />
      </section>
    </div>
  )
}

function treeMaker (data: any[], pid: string | number = 0) {
  const ret: any = []
  data.forEach(v => {
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
