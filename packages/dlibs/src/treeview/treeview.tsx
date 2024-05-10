import { splitProps, type Component, For, Show, createSignal } from 'solid-js'
import { TreeView as ATreeView } from '@ark-ui/solid'
import { treeProps } from './constant'

const TreeView: Component<treeProps> = (props) => {
  const [local, rest] = splitProps(props, ['data', 'labelName'])

  return (
    <Show
      when={local.data && local.data.length}
      fallback={<span>No Data</span>}
    >
      <ATreeView.Root {...rest}>
        <ATreeView.Tree class="enn-tree-root">
          <TreeContent data={local.data} labelName={local.labelName} />
        </ATreeView.Tree>
      </ATreeView.Root>
    </Show>
  )
}

const TreeContent: Component<any> = (props) => {
  const [local, rest] = splitProps(props, ['data', 'labelName'])
  return (
    <For each={local.data}>
      {(item) => {
        const [open, setOpen] = createSignal(false)
        if (!item.children || !item.children.length) {
          return (
            <ATreeView.Item
              id={item.menuId}
              class="enn-tree-item"
              value={item.value}
            >
              <ATreeView.ItemText>{item[local.labelName]}</ATreeView.ItemText>
            </ATreeView.Item>
          )
        } else {
          return (
            <ATreeView.Branch
              id={item.menuId}
              value={item.value}
              data-state={open() ? 'open' : 'closed'}
            >
              <ATreeView.BranchControl
                class="enn-tree-control"
                data-state={open() ? 'open' : 'closed'}
                onclick={labelClick}
              >
                <span
                  class="icon icon-[tdesign--caret-right-small]"
                  onClick={(e) => arrowClick(e, setOpen)}
                ></span>
                <span class="label-text">{item[local.labelName]}</span>
              </ATreeView.BranchControl>
              <ATreeView.BranchContent class="tree-sub" hidden={!open()}>
                <TreeContent data={item.children} labelName={local.labelName} />
              </ATreeView.BranchContent>
            </ATreeView.Branch>
          )
        }
      }}
    </For>
  )
  function labelClick(e: any) {
    e.cancelBubble = true
    console.log(e.target.parentElement.getAttribute('data-state'))
  }
  function arrowClick(e: any, set: (state: boolean) => void) {
    set(e.target.parentElement.getAttribute('data-state') == 'closed')
    e.cancelBubble = true
  }
}

export const DTreeView = TreeView
