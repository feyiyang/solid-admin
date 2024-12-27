import { type Component, type ComponentProps } from 'solid-js'
import { DAvatar } from 'dlibs'

const AvatarContain: Component<ComponentProps<any>> = () => {
  const imgUrl = 'https://tdesign.gtimg.com/site/avatar.jpg'
  return (
    <div class="gap-4">
      <div class="enn-divider enn-divider-start">基本用法</div>
      <div class="flex gap-2 items-center text-sm">
        默认 <DAvatar image={imgUrl} />
        圆角 <DAvatar shape="rounded" image={imgUrl} />
      </div>
      <div class="enn-divider enn-divider-start">头像大小</div>
      <div class="flex gap-2">
        <DAvatar size="sm" image={imgUrl} />
        <DAvatar size="md" image={imgUrl} />
        <DAvatar size="lg" image={imgUrl} />
      </div>
      <div class="enn-divider enn-divider-start">字符</div>
      <div class="flex gap-2">
        <DAvatar>杨</DAvatar>
        <DAvatar>杨树</DAvatar>
        <DAvatar>杨树林</DAvatar>
        <DAvatar>杨树林A</DAvatar>
      </div>
      <div class="enn-divider enn-divider-start">组合</div>
      <DAvatar.Group>
        <DAvatar image={imgUrl} />
        <DAvatar image={imgUrl} />
        <DAvatar>Y</DAvatar>
        <DAvatar>+99</DAvatar>
      </DAvatar.Group>
      <div class="enn-divider enn-divider-start">在线状态</div>
      <div class="flex gap-2">
        <DAvatar presence="on" image={imgUrl} />
        <DAvatar presence="off" image={imgUrl} />
      </div>
    </div>
  )
}

export default AvatarContain
