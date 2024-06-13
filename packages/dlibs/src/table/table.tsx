import { type Component, type ComponentProps, children, createSignal, onMount, splitProps, JSXElement, createEffect } from 'solid-js'
import { Tabulator } from 'tabulator-tables'
import { tabelProps, ColumnDefinition } from './constant'

import 'tabulator-tables/dist/css/tabulator_semanticui.min.css'

const Root: Component<ComponentProps<'div'> & tabelProps> = (props: any) => {
  const [local, rest] = splitProps(props, ['data', 'height', 'children'])
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
      console.log(columnCld, local.data, otherCld)
      const table = new Tabulator(tableRef, {
        layout: 'fitColumns',
        height: local.height || 120,
        minHeight: 120,
        data: local.data || [],
        columns: columnCld
      })
      tableInstance = table
    }
  })
  createEffect(() => {
    if (local.data?.length) {
      tableInstance.setData(local.data)
    }
  })
  return (
    <div ref={tableRef}></div>
  )
}

const Columns = (props: ColumnDefinition) => {
  return {
    name: 'columns',
    ...props
  } as unknown as JSXElement
}

export const DTable = {
  Root,
  Columns
}
