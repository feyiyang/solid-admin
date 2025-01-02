import { type Component, createEffect, onMount } from 'solid-js'
import { TabulatorFull as Tabulator } from 'tabulator-tables'
import { DButton, DDialog, DInput, DSelect, DToast } from 'dlibs'
import { ModalMenu, ModalMenuProvider } from './components/modalMenu'
import { settingServe } from '@/service'
import 'tabulator-tables/dist/css/tabulator_semanticui.min.css'
import './style.less'

interface Item {
  value: string
  label: string
  disabled?: boolean
}

const [openDlgData, setOpenDlgData] = createStore<{ [str: string]: any }>({})
const MenuListSet: Component<any> = () => {
  const [menuRes] = settingServe.menus({ roleType: 1, t: Date.now() })
  const options: Item[] = [
    { label: '正常', value: '0', disabled: false },
    { label: '异常', value: '1' }
  ]
  const [modalMenuShow, setMenuModalShow] = createSignal(false)
  const [modalDelShow, setModalDelShow] = createSignal(false)
  const [tableData, setTableData] = createSignal<any[]>([])
  const cellClick = (_E: any, _D: Record<string, any>) => {
    if (_E !== 'add') {
      setOpenDlgData(_D)
    }
    if (_E === 'delet') {
      setModalDelShow(true)
    }
  }
  const delHandler = () => {
    DToast.show({ message: '仅演示，无数据操作!', type: 'success' })
    setModalDelShow(false)
  }
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
          formatter: (cell) => {
            const datas = cell.getData()
            return (
              <div
                class="handlers"
                onClick={(e: any) => {
                  const { dataset } = e.srcElement
                  if (!dataset.show) {
                    return
                  }
                  cellClick(dataset.show, datas)
                  if (/edit|add/.test(dataset.show)) {
                    setMenuModalShow(true)
                  }
                }}
              >
                <span class="btn btn-edit" data-show="edit">
                  编辑
                </span>
                <span class="btn btn-add" data-show="add">
                  新增
                </span>
                <span class="btn btn-del" data-show="delet">
                  删除
                </span>
              </div>
            ) as any
          }
        }
      ]
    })
    createEffect(() => {
      if (!menuRes.loading) {
        const ret = treeMaker(menuRes() as [])
        setTableData(ret)
        table.setData(ret)
      }
    })
  })

  return (
    <>
      <DToast.Region>
        <DToast.List />
      </DToast.Region>
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
              itemComponent={(props: any) => (
                <DSelect.Option item={props.item} label={props.item.rawValue.label} />
              )}
            />
          </div>
          <DButton.Root type="primary" size="sm" outline>
            搜索
          </DButton.Root>
          <div class="w-full" />
          <DButton.Root
            type="primary"
            size="sm"
            onClick={() => {
              setOpenDlgData(
                produce((state) => {
                  for (const key in state) {
                    state[key] = null
                  }
                })
              )
              setMenuModalShow(true)
            }}
          >
            <span class="icon-[tdesign--add]" />
            新增
          </DButton.Root>
        </section>
        <section class="enn-search-result">
          <div id="tableEle" />
        </section>
        {modalMenuShow() && (
          <ModalMenuProvider modalMenuShow={modalMenuShow()} setShow={setMenuModalShow}>
            <ModalMenu tableData={tableData()} menuData={menuRes()} openData={openDlgData} />
          </ModalMenuProvider>
        )}
        <DDialog.Root title="系统提示" open={modalDelShow()} onOpenChange={setModalDelShow}>
          {/* <h3></h3> */}
          <div role="alert" class="alert p-2 my-4">
            <span class="w-6 h-6 icon-[tdesign--error-triangle] text-warning align-middle" />
            <span class="align-middle ml-4">是否确认删除名称为"系统监控"的数据项？</span>
          </div>
          <DDialog.Footer>
            <DButton.Root size="sm" onClick={() => setModalDelShow(false)}>
              取消
            </DButton.Root>
            <DButton.Root type="primary" size="sm" onClick={delHandler}>
              确定
            </DButton.Root>
          </DDialog.Footer>
        </DDialog.Root>
      </div>
    </>
  )
}

function treeMaker<T>(data: any[], pid: string | number = 0, intorFn?: (itm: T) => T[]) {
  const ret: T[] = []
  data.forEach((v) => {
    if (v.parentId === pid) {
      v.children = treeMaker(data, v.menuId)
      if (!v.children?.length) delete v.children
      ret.push(v)
      intorFn && intorFn(v)
    }
  })
  return ret
}

export default MenuListSet
