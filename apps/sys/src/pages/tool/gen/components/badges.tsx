import { type Component } from 'solid-js'
import { DAvatar, DBadge, DButton } from 'dlibs'

const BadgeContain: Component<any> = () => {
  return (
    <div class="gap-4">
      <div class="enn-divider enn-divider-start">基本用法</div>
      <div class="flex items-center gap-4">
        <div>数字</div>
        <DBadge value={2}>
          <DButton.Root>按钮</DButton.Root>
        </DBadge>
        <DBadge value="6">
          <DAvatar shape="rounded">杨</DAvatar>
        </DBadge>
        <div class="pl-4">红点</div>
        <DBadge dot>
          <div class="badge-content-box" />
        </DBadge>
        <DBadge dot>解锁新徽</DBadge>
      </div>
      <div class="enn-divider enn-divider-start">不同颜色</div>
      <div class="pb-2 text-gray-500">说明：当没有子节点时，将以纯徽标节点展示</div>
      <div class="flex gap-2 items-center">
        <DBadge value="default" />
        <DBadge type="primary" value="primary" />
        <DBadge type="success" value="success" />
        <DBadge type="info" value="info" />
        <DBadge type="warning" value="warning" />
        <DBadge type="error" value="error" />
        <div class="pl-4">outline:</div>
        <DBadge value="default" outline />
        <DBadge type="primary" value="primary" outline />
        <DBadge type="success" value="success" outline />
        <DBadge type="info" value="info" outline />
        <DBadge type="warning" value="warning" outline />
        <DBadge type="error" value="error" outline />
      </div>
    </div>
  )
}

export default BadgeContain
