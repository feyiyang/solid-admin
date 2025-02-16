import { type ComponentProps } from 'solid-js'
import IconTDesign from '../../icons/icons'
import ButtonContain from './components/buttons'
import RadioContain from './components/radios'
import CheckBoxContain from './components/checks'
import InputContain from './components/inputs'
import InputNumberContain from './components/inputNumber'
import SelectContain from './components/selects'
import SwitchContain from './components/switchs'
import SlidersContain from './components/slider'
import RateContain from './components/rates'
import AvatarContain from './components/avatars'
import CardContain from './components/cards'
import CollapseContain from './components/collapses'
import BadgeContain from './components/badges'
import TimelineContain from './components/timelines'
import './style.less'

const BaseComponent: ComponentProps<any> = () => {
  return (
    <div class="page-base-components">
      <div class="header">
        <h3 class="text-lg">基础组件</h3>
        <p class="my-2">
          组件大部分基于 kobalte 和 daisyui, 参考国内常用组件库的使用习惯进行了二次封装.{' '}
        </p>
      </div>
      <div role="tablist" class="my-2 enn-tabs enn-tabs-lifted">
        <input
          type="radio"
          checked
          name="my_tabs_1"
          role="tab"
          class="enn-tab"
          aria-label=" 图标 "
        />
        <div role="tabpanel" class="enn-tab-content p-6 border-base-300 rounded-box">
          <div class="enn-divider enn-divider-start">
            更多可查看
            <a
              class="enn-link-primary"
              href="https://icon-sets.iconify.design/tdesign"
              target="_blank"
            >
              iconify/tdesign
            </a>
          </div>
          <IconTDesign />
        </div>

        <input type="radio" name="my_tabs_1" role="tab" class="enn-tab" aria-label="按钮" />
        <div role="tabpanel" class="enn-tab-content p-6 border-base-300 rounded-box gap-2">
          <ButtonContain />
        </div>

        <input type="radio" name="my_tabs_1" role="tab" class="enn-tab" aria-label="单选框" />
        <div role="tabpanel" class="enn-tab-content p-6 border-base-300 rounded-box">
          <RadioContain />
        </div>

        <input type="radio" name="my_tabs_1" role="tab" class="enn-tab" aria-label="多选框" />
        <div role="tabpanel" class="enn-tab-content p-6 border-base-300 rounded-box">
          <CheckBoxContain />
        </div>

        <input type="radio" name="my_tabs_1" role="tab" class="enn-tab" aria-label="输入框" />
        <div role="tabpanel" class="enn-tab-content p-6 border-base-300 rounded-box">
          <InputContain />
        </div>

        <input type="radio" name="my_tabs_1" role="tab" class="enn-tab" aria-label="数字输入框" />
        <div role="tabpanel" class="enn-tab-content p-6 border-base-300 rounded-box">
          <InputNumberContain />
        </div>

        <input type="radio" name="my_tabs_1" role="tab" class="enn-tab" aria-label="下拉框" />
        <div role="tabpanel" class="enn-tab-content p-6 border-base-300 rounded-box">
          <SelectContain />
        </div>

        <input type="radio" name="my_tabs_1" role="tab" class="enn-tab" aria-label="开关" />
        <div role="tabpanel" class="enn-tab-content p-6 border-base-300 rounded-box">
          <SwitchContain />
        </div>

        <input type="radio" name="my_tabs_1" role="tab" class="enn-tab" aria-label="滑动条" />
        <div role="tabpanel" class="enn-tab-content p-6 border-base-300 rounded-box">
          <SlidersContain />
        </div>

        <input type="radio" name="my_tabs_1" role="tab" class="enn-tab" aria-label="评分" />
        <div role="tabpanel" class="enn-tab-content p-6 border-base-300 rounded-box">
          <RateContain />
        </div>
      </div>

      <div class="header">
        <h3 class="block pt-4 pb-2 text-lg">数据展示</h3>
      </div>
      <div role="tablist" class="my-2 enn-tabs enn-tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" class="enn-tab" checked aria-label="头像" />
        <div role="tabpanel" class="enn-tab-content p-6 border-base-300 rounded-box">
          <AvatarContain />
        </div>

        <input type="radio" name="my_tabs_2" role="tab" class="enn-tab" aria-label="卡片" />
        <div role="tabpanel" class="enn-tab-content p-6 border-base-300 rounded-box">
          <CardContain />
        </div>

        <input type="radio" name="my_tabs_2" role="tab" class="enn-tab" aria-label="折叠面板" />
        <div role="tabpanel" class="enn-tab-content p-6 border-base-300 rounded-box">
          <CollapseContain />
        </div>

        <input type="radio" name="my_tabs_2" role="tab" class="enn-tab" aria-label="徽标" />
        <div role="tabpanel" class="enn-tab-content p-6 border-base-300 rounded-box">
          <BadgeContain />
        </div>

        <input type="radio" name="my_tabs_2" role="tab" class="enn-tab" aria-label="时间轴" />
        <div role="tabpanel" class="enn-tab-content p-6 border-base-300 rounded-box">
          <TimelineContain />
        </div>
      </div>
    </div>
  )
}

export default BaseComponent
