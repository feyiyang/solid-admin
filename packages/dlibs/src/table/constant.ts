export {type ColumnDefinition} from 'tabulator-tables'

export type tabelProps = {
  data: any[]
  height?: number | string
  maxHeight?: number | string
  stripe?: boolean
  border?: boolean
  size?: ''
  showHeader?: boolean
  emptyText?: string
  layout?: 'fitData' | 'fitDataFill' | 'fitDataStretch' | 'fitDataTable' | 'fitColumns'
}
