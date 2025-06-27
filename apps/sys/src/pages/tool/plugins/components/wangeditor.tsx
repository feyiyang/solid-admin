import { type ComponentProps, createContext, splitProps } from 'solid-js'
import { type IDomEditor, createEditor, createToolbar } from '@wangeditor/editor'
import { defProps, type editorProps, type toolbarProps } from './constant'
import '@wangeditor/editor/dist/css/style.css'

const editroCtx = createContext({ mode: 'default' })

const Root = (props: ComponentProps<'div'>) => {
  return (
    <editroCtx.Provider value={{ mode: 'default' }}>
      <div {...props} />
    </editroCtx.Provider>
  )
}

const Contain = (props: editorProps & ComponentProps<'div'>) => {
  const merged = mergeProps(defProps, props)
  const [local, rest] = splitProps(merged, [
    'class',
    'style',
    'defaultContent',
    'onCreated',
    'defaultHtml',
    'value',
    'onChange',
    'defaultConfig',
    'mode'
  ])
  const [curValue, setCurValue] = createSignal('')
  let contain!: HTMLDivElement
  let editorInstance: IDomEditor | null = null

  const handleCreated = (editor: IDomEditor) => {
    if (local.onCreated) local.onCreated(editor)

    const { onCreated: onCreatedFromConfig } = local.defaultConfig
    onCreatedFromConfig && onCreatedFromConfig(editor)
  }

  const handleChange = (editor: IDomEditor) => {
    setCurValue(editor.getHtml())

    if (local.onChange) local.onChange(editor)

    const { onChange: onChangeFromConfig } = local.defaultConfig
    onChangeFromConfig && onChangeFromConfig(editor)
  }

  const handleDestroyed = (editor: IDomEditor) => {
    const { onDestroyed } = local.defaultConfig
    editorInstance = null
    onDestroyed && onDestroyed(editor)
  }

  createEffect(() => {
    if (!editorInstance) return
    if (local.value === curValue()) return

    try {
      editorInstance.setHtml(local.value)
    } catch (error) {
      console.error('setHtml error:', error)
    }
  })
  createEffect(() => {
    if (!contain) return
    if (editorInstance != null) return
    if (contain.dataset['w-e-textarea']) return
    editorInstance = createEditor({
      selector: contain,
      config: {
        ...local.defaultConfig,
        onCreated: handleCreated,
        onChange: handleChange,
        onDestroyed: handleDestroyed
      },
      html: local.defaultHtml || local.value,
      ...rest
    })
  })
  return <div ref={contain} class={local.class || ''} style={local.style} />
}

const Toolbar = (props: toolbarProps & ComponentProps<'div'>) => {
  const [local, rest] = splitProps(props, ['class', 'style', 'editor', 'defaultConfig'])
  let bar!: HTMLDivElement
  let barRef: any = null
  const cls = `${local.class || ''}`
  createEffect(() => {
    if (!bar || !local.editor || barRef) return
    barRef = createToolbar({
      editor: local.editor,
      selector: bar,
      config: local.defaultConfig,
      ...rest
    })
  })
  return <div ref={bar} class={cls} style={local.style} />
}

export const WangEditor = Object.assign(Root, {
  Contain,
  Toolbar
})
