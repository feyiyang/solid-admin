export {type ColumnDefinition, type OptionsGeneral} from 'tabulator-tables'

export type tabelProps = {
  class?: string
  data: any[]
  height?: number | string
  maxHeight?: number | string
  minHeight?: number | string
  stripe?: boolean
  border?: boolean
  size?: ''
  showHeader?: boolean
  emptyText?: string
  layout?: 'fitData' | 'fitDataFill' | 'fitDataStretch' | 'fitDataTable' | 'fitColumns'
}
