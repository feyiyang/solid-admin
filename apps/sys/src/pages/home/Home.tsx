import { type Component, type ComponentProps, onCleanup } from 'solid-js'
import { createStore, produce } from 'solid-js/store'
import './style.less'
import { DButton } from 'dlibs'

const [homeState, setHomeState] = createStore({
  hh: '07',
  mm: '00',
  ss: '00'
})

const ssTimer: any = setInterval(() => {
  const _t: Date = new Date()
  setHomeState(produce((state) => {
    state.hh = (_t.getHours().toString()).padStart(2, '0')
    state.mm = (_t.getMinutes().toString()).padStart(2, '0')
    state.ss = (_t.getSeconds().toString()).padStart(2, '0')
  }))
}, 1000)

const Home: Component<ComponentProps<'div'>> = () => {
  onCleanup(() => {
    clearInterval(ssTimer)
  })
  return (
    <div class="home-board">
      <div class="top-info leading-8">
        <div class="sec-left flex items-center grow">
          <div class="enn-avatar mr-8">
            <div class="ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div class="cont grow">
            <p>{Number.parseInt(homeState.hh) < 12 ? '上' : '下'}午好，系统管理员！</p>
            <p class="text-gray-400">
              今日天气晴朗，气温在15℃至25℃之间，东南风。
              <span class="enn-countdown font-mono text-xl">
                <span style={{"--value": homeState.hh}}></span>:
                <span style={{"--value": homeState.mm}}></span>:
                <span style={{"--value": homeState.ss}}></span>
              </span>
            </p>
          </div>
        </div>
        <div class="todos">
          <span class="will enn-indicator" title="消息">
            <span class="enn-indicator-item enn-badge enn-badge-sm enn-badge-neutral">99+</span>
            <span class="icon-[tdesign--chat-message] "></span>
          </span>
          <span class="will enn-indicator" title="待办">
            <span class="enn-indicator-item enn-badge enn-badge-sm enn-badge-neutral">19</span>
            <span class="icon-[tdesign--root-list]"></span>
          </span>
        </div>
      </div>
      <div class="top-states leading-8">
        <div class="enn-stat">
          <div class="enn-stat-figure text-indigo-400">
            <i class="icon-[tdesign--heart] w-7 h-7" />
          </div>
          <div class="enn-stat-title">点赞统计</div>
          <div class="enn-stat-value">25.6K</div>
          <div class="enn-stat-desc">21% more than last month</div>
        </div>

        <div class="enn-stat">
          <div class="enn-stat-figure text-indigo-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div class="enn-stat-title">浏览统计</div>
          <div class="enn-stat-value">2.6M</div>
          <div class="enn-stat-desc">21% more than last month</div>
        </div>

        <div class="enn-stat">
          <div class="enn-stat-figure text-indigo-400">
            <i class="icon-[tdesign--task-add-1] w-8 h-8" />
          </div>
          <div class="enn-stat-title">执行统计</div>
          <div class="enn-stat-value">86%</div>
          <div class="enn-stat-desc text-indigo-400">31 tasks remaining</div>
        </div>

        <div class="enn-stat">
          <div class="enn-stat-figure text-indigo-400">
            <i class="icon-[tdesign--api] w-8 h-8" />
          </div>
          <div class="enn-stat-title">收藏统计</div>
          <div class="enn-stat-value">9.7k</div>
          <div class="enn-stat-desc">10% more than last month</div>
        </div>
      </div>
    </div>
  )
}

export default Home
