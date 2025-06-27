import { Editor, type EditorOptions } from '@tiptap/core'
import { type ComponentProps, createContext, createEffect, onMount } from 'solid-js'
import StarterKit from '@tiptap/starter-kit'

import { DButton, DropMenu } from 'dlibs'

import './editor.less'

const editroCtx = createContext<{ editor: object; setEditor: any }>()

const Root = (props: ComponentProps<any>) => {
  const [editor, setEditor] = createSignal(null)
  return <editroCtx.Provider value={{ editor, setEditor }} {...props} />
}

const Contain = (props: ComponentProps<any> & Omit<Partial<EditorOptions>, 'element'>) => {
  const [local, rest] = splitProps(props, ['class'])
  const { setEditor } = useContext(editroCtx) as any
  let editorRef, editorInstance
  const cls = `tiptap-editor ${local.class || ''}`
  onMount(() => {
    editorInstance = new Editor({
      element: editorRef,
      extensions: [StarterKit],
      // onSelectionUpdate: ({ editor }) => {
      //   console.log(editor.isActive("heading"), editor)
      // },
      ...rest
    })
    setEditor(editorInstance)
  })
  return <div ref={editorRef} class={cls} />
}

const Toolbar = () => {
  const toolItems = [
    { label: <h1>H1</h1>, value: '1', text: 'H1' },
    { label: <h2>H2</h2>, value: '2', text: 'H2' },
    { label: <h3>H3</h3>, value: '3', text: 'H3' },
    { label: <h4>H4</h4>, value: '4', text: 'h4' },
    { label: <h5>H5</h5>, value: '5', text: 'H5' },
    { label: '正文', value: '6', text: '正文' }
  ]
  const [textType, setTextType] = createSignal(toolItems[5])
  const [isBold, setIsBold] = createSignal(false)
  const [isUnder, setIsUnder] = createSignal(false)
  const { editor } = useContext(editroCtx) as any
  createEffect(() => {
    editor()?.on('selectionUpdate', ({ editor }) => {
      const headActive = [1, 2, 3, 4, 5].find((level: number) => {
        return editor.isActive('heading', { level })
      })
      if (headActive) {
        setTextType(toolItems[headActive - 1])
      } else {
        setTextType(toolItems[5])
      }
      setIsBold(editor.isActive('bold'))
      setIsUnder(editor.isActive('underline'))
    })
  })
  return (
    <div class="tip-toolbar p-2 bg-white">
      <DropMenu.Root>
        <DropMenu.Trigger class="w-[72px] tool-btn" as="span">
          {textType().text}
          <span class="icon-[tdesign--chevron-down]" />
        </DropMenu.Trigger>
        <DropMenu.Contain
          class="w-[120px] headings"
          value={textType().value}
          items={toolItems}
          onSelect={(val: number) => {
            editor()
              .chain()
              .focus()
              .setHeading({ level: val * 1 })
              .run()
            setTextType(toolItems[val - 1])
          }}
        />
      </DropMenu.Root>
      <span
        class="tool-btn"
        classList={{ 'active': isBold() }}
        onClick={() => {
          editor()?.chain().focus().toggleBold().run()
          setIsBold(!isBold())
        }}
      >B</span>
      <span 
        class='tool-btn underline'
        classList={{ 'active': isUnder() }}
        onClick={() => {
          editor()?.commands.toggleUnderline()
          setIsUnder(!isUnder())
        }}
      >U</span>
      <span class='tool-btn italic'
        onClick={() => {
          editor()?.chain().focus().toggleItalic().run()
        }}
      >I</span>
    </div>
  )
}

export const TipEditor = Object.assign(Root, {
  Contain,
  Toolbar
})
