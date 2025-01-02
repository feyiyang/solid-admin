import { TreeViewRootProps } from '@ark-ui/solid'

export type treeProps = Partial<TreeViewRootProps<any>> & {
  data: []
  idName?: string
  labelName?: string
}
