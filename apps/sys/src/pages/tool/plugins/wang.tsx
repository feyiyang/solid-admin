/* eslint-disable no-useless-escape, solid/no-innerhtml */
import { type IDomEditor } from '@wangeditor/editor'
import { WangEditor } from '@plugin/wangeditor'
import './style.less'

const Wang = () => {
  const [editorRef, setEditorRef] = createSignal<IDomEditor | null>(null)
  const [html, setHtml] = createSignal('<p>hello <strong>world</strong></p><p><br></p>')

  onCleanup(() => {
    if (editorRef() == null) return
    editorRef()?.destroy()
    setEditorRef(null)
  })

  return (
    <>
      <div class="px-4 py-2 mb-2">
        <p class="pb-2 text-lg">wangEditor 编辑器</p>
        <div class="w-fit px-2 leading-6 border bg-slate-100">
          pnpm add @wangeditor/editor <br /> {`import \{ WangEditor \} from '@plugin/wangeditor'`}
        </div>
        <p class="py-2">
          使用参考{' '}
          <a
            class="enn-link"
            href="https://www.wangeditor.com/v5/for-frame.html#react"
            target="_blank"
          >
            wangeditor-react
          </a>
        </p>
      </div>
      <div class="p-4 bg-slate-200">
        <WangEditor class="border-2 border-slate-300">
          <WangEditor.Toolbar editor={editorRef() as any} />
          <WangEditor.Contain
            class="h-[300px] w-full caret-blue-500"
            value={html()}
            onCreated={setEditorRef}
            onChange={(editor: any) => setHtml(editor.getHtml())}
            defaultConfig={{}}
          />
        </WangEditor>
        <textarea class="w-full h-16 p-2 my-4 bg-white border border-stone-400" readonly>{html()}</textarea>
        <div class="wang-content-view" innerHTML={html()} />
      </div>
    </>
  )
}

export default Wang
