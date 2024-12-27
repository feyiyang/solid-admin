import { type Component } from 'solid-js'
import { DButton } from 'dlibs'
const ButtonContain: Component<any> = () => {
  return (
    <>
      <div class="enn-divider enn-divider-start">基本用法</div>
      <DButton.Root>默认按钮</DButton.Root>
      <DButton.Root type="primary">主要按钮</DButton.Root>
      <DButton.Root type="success">成功按钮</DButton.Root>
      <DButton.Root type="info">信息按钮</DButton.Root>
      <DButton.Root type="warning">警告按钮</DButton.Root>
      <DButton.Root type="error">危险按钮</DButton.Root>
      <div class="py-[8px]" />
      <DButton.Root outline>边框按钮</DButton.Root>
      <DButton.Root outline type="primary">
        主要按钮
      </DButton.Root>
      <DButton.Root outline type="success">
        成功按钮
      </DButton.Root>
      <DButton.Root outline type="info">
        信息按钮
      </DButton.Root>
      <DButton.Root outline type="warning">
        警告按钮
      </DButton.Root>
      <DButton.Root outline type="error">
        危险按钮
      </DButton.Root>
      <div class="py-[8px]" />
      <DButton.Root round>圆角按钮</DButton.Root>
      <DButton.Root round outline>
        圆角按钮
      </DButton.Root>
      <DButton.Root circle>
        <i class="icon-[tdesign--close]" />
      </DButton.Root>
      <DButton.Root circle outline>
        <i class="icon-[tdesign--close]" />
      </DButton.Root>
      <div class="mt-6 enn-divider enn-divider-start">禁用状态</div>
      <DButton.Root disabled>禁用按钮</DButton.Root>
      <div class="mt-6 enn-divider enn-divider-start">加载中</div>
      <DButton.Root class="align-bottom">
        <span class="enn-loading enn-loading-spinner" />
        加载中
      </DButton.Root>
      <div class="mt-6 enn-divider enn-divider-start">不同尺寸</div>
      <DButton.Root size="lg">Large</DButton.Root>
      <DButton.Root>Normal</DButton.Root>
      <DButton.Root size="sm">Small</DButton.Root>
      <DButton.Root size="xs">Tiny</DButton.Root>
    </>
  )
}

export default ButtonContain
