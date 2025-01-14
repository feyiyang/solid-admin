import { type Component, type ComponentProps, createEffect, onCleanup } from 'solid-js'
import { createStore, produce } from 'solid-js/store'
import { ECharts } from 'echarts-solid'
import { homeServe } from '@/service'
import './style.less'

const [homeState, setHomeState] = createStore<{
  hh: string
  mm: string
  ss: string
  charts: null | Record<string, []>
}>({
  hh: '07',
  mm: '00',
  ss: '00',
  charts: null
})

const ssTimer: any = setInterval(() => {
  const _t: Date = new Date()
  setHomeState(
    produce((state) => {
      state.hh = _t.getHours().toString().padStart(2, '0')
      state.mm = _t.getMinutes().toString().padStart(2, '0')
      state.ss = _t.getSeconds().toString().padStart(2, '0')
    })
  )
}, 1000)

const Charts: Component<any> = () => {
  let fromCharts: any
  let trendCharts: any
  const [homeRes] = homeServe.charts() as any
  const optionFromState = {
    title: {
      text: '用户来源渠道分布',
      subtext: 'Fake Data',
      left: 'left'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: false,
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '65%'],
        data: [],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  const optionTrendState: Record<string, any> = {
    title: {
      text: '用户趋势分析'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    xAxis: {
      type: 'category',
      data: []
    },
    series: [
      { name: 'UV', type: 'bar', data: [] },
      { name: 'PV', type: 'bar', data: [] },
      { name: '注册用户数', type: 'bar', data: [] },
      { name: '付费用户数', type: 'bar', data: [] }
    ]
  }
  createEffect(() => {
    if (!homeRes.loading && homeRes()) {
      setHomeState(
        produce((state) => {
          state.charts = homeRes()
        })
      )
      homeState.charts?.userFrom.forEach((v: any) => {
        optionFromState.series[0].data.push({
          name: v.dim_b_渠道名称_0,
          value: v.index_a_注册用户数_0
        } as never)
      })
      homeState.charts?.userTrend.forEach((v: any, i: number) => {
        optionTrendState.xAxis.data.push(v['dim_a_日期_1'])
        optionTrendState.series.forEach((itm: any) => {
          itm.data[i] = v[`index_a_${itm.name}_1`]
        })
      })
      fromCharts.setOption(optionFromState)
      trendCharts.setOption(optionTrendState)
    }
  })
  return (
    <div class="chart_wrap">
      <div class="row">
        <ECharts
          option={optionFromState as any}
          width="auto"
          height={320}
          theme="walden"
          onInit={(ci) => {
            fromCharts = ci
          }}
        />
        <ECharts
          option={optionTrendState as any}
          width="auto"
          height={320}
          theme="walden"
          onInit={(ci) => {
            trendCharts = ci
          }}
        />
      </div>
    </div>
  )
}

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
              <img src="https://api.dicebear.com/9.x/miniavs/svg?seed=Jude" />
            </div>
          </div>
          <div class="cont grow">
            <p>{Number.parseInt(homeState.hh) < 12 ? '上' : '下'}午好，系统管理员！</p>
            <p class="text-gray-400">
              今日天气晴朗，气温在15℃至25℃之间，东南风。
              <span class="enn-countdown font-mono text-xl">
                <span style={{ '--value': homeState.hh }} />:
                <span style={{ '--value': homeState.mm }} />:
                <span style={{ '--value': homeState.ss }} />
              </span>
            </p>
          </div>
        </div>
        <div class="todos">
          <span class="will enn-indicator" title="消息">
            <span class="enn-indicator-item enn-badge enn-badge-sm enn-badge-neutral">99+</span>
            <span class="icon-[tdesign--chat-message] " />
          </span>
          <span class="will enn-indicator" title="待办">
            <span class="enn-indicator-item enn-badge enn-badge-sm enn-badge-neutral">19</span>
            <span class="icon-[tdesign--root-list]" />
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
      <div role="alert" class="enn-alert my-4 bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="stroke-info shrink-0 w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>
          此项目受 ruoyi.vip 等优秀开源项目启发，用 solid.js 和 eggjs 做的个人兴趣项目(线上mock)。
          solid.js 是一个无虚拟dom，比 react 更 react 的框架，更新粒度超细，目前生态还在完善中。{' '}
        </span>
      </div>
      <Charts />
    </div>
  )
}

export default Home
