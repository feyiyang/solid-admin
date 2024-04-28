import { type Component } from 'solid-js'
import { DButton, DInput } from 'dlibs'
import { settingServe } from '@/service'
import './style.less'

const MenuListSet: Component<any> = () => {
  settingServe.menus({roleType: 1, t: Date.now()})
  return (
    <section class='enn-search-form'>
      <div class="form-item pr-4">
        <span class='label'>菜单名称</span>
        <DInput.Root>
          <DInput.Input placeholder='请输入菜单名称' />
        </DInput.Root>
      </div>
      <div class="form-item pr-4">
        <span class='label'>状态</span>
        <DInput.Root>
          <DInput.Input placeholder='请输入菜单名称' />
        </DInput.Root>
      </div>
      <DButton.Root type='primary' size='sm' outline>搜索</DButton.Root>
    </section>
  )
}

export default MenuListSet
