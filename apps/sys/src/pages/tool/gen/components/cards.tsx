import { type Component } from 'solid-js'
import { DButton, DCard } from 'dlibs'

const CardContain: Component<any> = () => {
  const cover = 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
  return (
    <div class="gap-4">
      <div class="enn-divider enn-divider-start">基本用法</div>
      <div class="p-4 flex gap-4 items-start bg-base-200">
        <DCard class="w-96" title="标题" cover={cover}>
          <p>
            卡片内容，以描述性为主，可以是文字、组件或图文组合的形式。按业务需求进行自定义组合。
          </p>
          <DCard.Action>
            <DButton.Root type="primary">查看</DButton.Root>
          </DCard.Action>
        </DCard>
        <DCard class="w-96" title="标题">
          <p>展示一个只有内容没有封面图的卡片。卡片内容，以描述性为主。</p>
          <DCard.Action>
            <DButton.Root type="primary">查看</DButton.Root>
          </DCard.Action>
        </DCard>
      </div>
      <div class="enn-divider enn-divider-start">叠加</div>
      <div class="p-4 flex gap-4 items-start bg-base-200">
        <DCard class="w-96" title="标题" cover={cover} overlay>
          <p>
            卡片内容，以描述性为主，可以是文字、组件或图文组合的形式。按业务需求进行自定义组合。
          </p>
          <DCard.Action>
            <DButton.Root type="primary">查看</DButton.Root>
          </DCard.Action>
        </DCard>
      </div>
    </div>
  )
}

export default CardContain
