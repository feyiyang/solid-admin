import { TipEditor } from './components/tiptap'

import './style.less'

const Tiptap = () => {
  const content = `<p>hello world</p>`
  return (
    <>
      <div class="px-4 py-2 mb-2">
        <p class="pb-2 text-lg">tiptap 编辑器</p>
        <p class="py-2">
          使用参考{' '}
          <a
            class="enn-link"
            href="https://tiptap.dev/docs/editor/getting-started/configure"
            target="_blank"
          >
            tiptap-configure
          </a>
        </p>
      </div>
      <div class='p-4 bg-slate-200'>
        <TipEditor>
          <TipEditor.Toolbar />
          <TipEditor.Contain class='h-32' content={content} />
        </TipEditor>
      </div>
    </>
  )
}

export default Tiptap
