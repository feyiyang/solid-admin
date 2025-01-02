import { splitProps, type Component, For, Show, createSignal, ComponentProps } from 'solid-js'
import { TreeView, createTreeCollection } from '@ark-ui/solid/tree-view'

const Root: Component<ComponentProps<any>> = (props) => {
  const [local, rest] = splitProps(props, ['data', 'labelName', 'idName'])
  const collection = createTreeCollection({
    nodeToValue: (node) => node[local.idName],
    nodeToString: (node) => node[local.labelName],
    rootNode: {
      [local.idName]: 'ROOTID',
      [local.labelName]: 'ROOTNAME',
      children: local.data
    }
  })

  return (
    <TreeView.Root collection={collection} {...rest}>
      <TreeView.Tree class="enn-tree-root">
        <For each={collection.rootNode.children}>
          {(node, index) => <TreeNode node={node} indexPath={[index()]} labelName={local.labelName} />}
        </For>
      </TreeView.Tree>
    </TreeView.Root>
  )
}

const TreeNode = (props: ComponentProps<any>) => {
  const { node, indexPath } = props
  const [open, setOpen] = createSignal(false)
  return (
    <TreeView.NodeProvider node={node} indexPath={indexPath}>
      <Show
        when={node.children}
        fallback={
          <TreeView.Item class="enn-tree-item">
            <TreeView.ItemText>
              {node.menuName}
            </TreeView.ItemText>
          </TreeView.Item>
        }
      >
        <TreeView.Branch data-state={open() ? 'open' : 'closed'}>
          <TreeView.BranchControl class="enn-tree-control" data-state={open() ? 'open' : 'closed'} onclick={labelClick}>
            <span
              class="icon icon-[tdesign--caret-right-small]"
              onClick={(e) => arrowClick(e, setOpen)}
            ></span>
            <TreeView.BranchText class="label-text">
              {node.menuName}
            </TreeView.BranchText>
            <TreeView.BranchIndicator>
            </TreeView.BranchIndicator>
          </TreeView.BranchControl>
          <TreeView.BranchContent class="tree-sub" hidden={!open()}>
            <TreeView.BranchIndentGuide />
            <For each={node.children}>
              {(child, index) => <TreeNode node={child} indexPath={[...indexPath, index()]} />}
            </For>
          </TreeView.BranchContent>
        </TreeView.Branch>
      </Show>
    </TreeView.NodeProvider>
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

const TreeContent: Component<any> = (props) => {
  const [local, rest] = splitProps(props, ['data', 'labelName'])
  return (
    <For each={local.data}>
      {(item) => {
        const [open, setOpen] = createSignal(false)
        if (!item.children || !item.children.length) {
          return (
            <TreeView.Item
              id={item.menuId}
              class="enn-tree-item"
            >
              <TreeView.ItemText>{item[local.labelName]}</TreeView.ItemText>
            </TreeView.Item>
          )
        } else {
          return (
            <TreeView.Branch
              id={item.menuId}
              data-state={open() ? 'open' : 'closed'}
            >
              <TreeView.BranchControl
                class="enn-tree-control"
                data-state={open() ? 'open' : 'closed'}
                onclick={labelClick}
              >
                <span
                  class="icon icon-[tdesign--caret-right-small]"
                  onClick={(e) => arrowClick(e, setOpen)}
                ></span>
                <span class="label-text">{item[local.labelName]}</span>
              </TreeView.BranchControl>
              <TreeView.BranchContent
                class="tree-sub"
                hidden={!open()}
                {...rest}
              >
                <TreeContent data={item.children} labelName={local.labelName} />
              </TreeView.BranchContent>
            </TreeView.Branch>
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

export const DTreeView = Object.assign(Root)
