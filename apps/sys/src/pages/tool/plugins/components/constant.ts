import type { IDomEditor, IEditorConfig, IToolbarConfig, SlateDescendant } from '@wangeditor/editor'

export const defProps = {
  mode: 'default',
  defaultContent: [],
  defaultHtml: '',
  value: '',
  defaultConfig: {}
}

export interface editorProps {
  defaultContent?: SlateDescendant[]
  onCreated?: (editor: IDomEditor) => void
  html?: string
  value?: string
  onChange?: (editor: IDomEditor) => void
  defaultConfig: Partial<IEditorConfig>
  mode?: string
}

export interface toolbarProps {
  editor: IDomEditor | null
  defaultConfig?: Partial<IToolbarConfig>
  mode?: string
}