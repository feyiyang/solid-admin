import type { Component, ComponentProps } from 'solid-js'
import './style.less'

const Home: Component<ComponentProps<'div'>> = () => {
  return (
    <div class="home-board">
      <div class="top-states">
        <div class="enn-stat place-items-center">
          <div class="enn-stat-figure text-primary">
            <i class="icon-[tdesign--heart] w-7 h-7" />
          </div>
          <div class="enn-stat-title">点赞统计</div>
          <div class="enn-stat-value">25.6K</div>
          <div class="enn-stat-desc">21% more than last month</div>
        </div>

        <div class="enn-stat place-items-center">
          <div class="enn-stat-figure text-secondary">
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

        <div class="enn-stat place-items-center">
          <div class="enn-stat-figure text-info">
            <i class="icon-[tdesign--task-add-1] w-8 h-8" />
          </div>
          <div class="enn-stat-title">执行统计</div>
          <div class="enn-stat-value">86%</div>
          <div class="enn-stat-desc text-info">31 tasks remaining</div>
        </div>

        <div class="enn-stat place-items-center">
          <div class="enn-stat-figure text-secondary">
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
