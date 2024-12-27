import { type Component } from 'solid-js'
import { DCollapse } from 'dlibs'

function collapseComp(props: any) {
  return (
    <DCollapse class="max-w-96" {...props}>
      <DCollapse.Item value="item-1">
        <DCollapse.Title>这是一个折叠标题</DCollapse.Title>
        <DCollapse.Content>
          这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
        </DCollapse.Content>
      </DCollapse.Item>
      <DCollapse.Item value="item-2">
        <DCollapse.Title>这是一个折叠标题</DCollapse.Title>
        <DCollapse.Content>
          这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
        </DCollapse.Content>
      </DCollapse.Item>
      <DCollapse.Item value="item-3">
        <DCollapse.Title>这是一个折叠标题</DCollapse.Title>
        <DCollapse.Content>
          这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
        </DCollapse.Content>
      </DCollapse.Item>
    </DCollapse>
  )
}

const CollapseContain: Component<any> = () => {
  return (
    <div class="gap-4">
      <div class="enn-divider enn-divider-start">普通</div>
      {collapseComp({})}
      <div class="enn-divider enn-divider-start">手风琴</div>
      {collapseComp({ mutex: true })}
    </div>
  )
}

export default CollapseContain
