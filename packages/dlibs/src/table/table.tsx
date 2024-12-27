import { type Component, type ComponentProps, children, onMount, splitProps, createEffect } from 'solid-js'
import { render } from 'solid-js/web'
import _ from 'lodash'
import { TabulatorFull as Tabulator, type Options } from 'tabulator-tables'
import { tabelProps, ColumnDefinition } from './constant'

import 'tabulator-tables/dist/css/tabulator_semanticui.min.css'

const Root: Component<ComponentProps<'div'> & tabelProps & Options> = (props) => {
  const [local, rest] = splitProps(props, ['data', 'children', 'class'])
  const cld = children(() => local.children)
  let tableRef: any
  let tableInstance: any
  let columnCld: any[] = []
  let otherCld: any[] = []
  onMount(() => {
    if (Array.isArray(cld())) {
      columnCld = (cld() as any).filter((v: Record<string, any>) => {
        if (v.name === 'columns') {
          delete v.name
          return true
        }
        otherCld.push(v)
        return false
      })
      // console.log(columnCld, local.data, otherCld)
      const table = new Tabulator(tableRef, {
        columns: columnCld,
        ..._.merge({
          layout: 'fitColumns',
          placeholder:"暂无数据",
          data: local.data || [],
          columnDefaults: {
            headerSort: false,
            vertAlign: "middle"
          }
        }, rest)
      })
      table.on("tableBuilt", () => {
        tableInstance = table
      })
    }
  })
  createEffect(() => {
    if (local.data && tableInstance) {
      tableInstance.setData(local.data)
    }
  })
  return (
    <div ref={tableRef} />
  )
}

const Columns = (props: ColumnDefinition & ComponentProps<any>) => {
  const [local, rest] = splitProps(props, ['children', 'class'])
  const cld = children(() => local.children)

  const ret: any = {
    name: 'columns',
    ...rest
  }

  if (cld()) {
    const call = cld() as any
    ret.formatter = (cell: any) => {
      
      if (typeof call === 'function') {
        let ele = document.createElement('div')
        render(() => call(cell.getData(), cell.getRow().getPosition()),  ele)
        return ele
      }
      return call
    }
  }
  return ret
}

export const DTable = {
  Root,
  Columns
}
