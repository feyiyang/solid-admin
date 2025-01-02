import { type Component } from 'solid-js'
import { DTimeline } from 'dlibs'

const TimelineContain: Component<any> = () => {
  const YourCustomIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" class='w-6 h-6' viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11M7.5 10.586l3 3l6-6L17.914 9L10.5 16.414L6.086 12z"
      />
    </svg>
  )
  return (
    <div class="gap-4">
      <div class="enn-divider enn-divider-start">基本用法</div>
      <DTimeline>
        <DTimeline.Item label="2025-01-01">事件一</DTimeline.Item>
        <DTimeline.Item label="2025-02-01">事件二</DTimeline.Item>
        <DTimeline.Item label="2025-03-01">事件三</DTimeline.Item>
        <DTimeline.Item label="2025-04-01">事件四</DTimeline.Item>
      </DTimeline>
      <div class="enn-divider enn-divider-start">节点图标</div>
      <DTimeline>
        <DTimeline.Item label="2025-01-01" icon="w-6 h-6 icon-[tdesign--star]">
          事件一
        </DTimeline.Item>
        <DTimeline.Item
          label="2025-02-01"
          icon={<span class="w-6 h-6 icon-[tdesign--info-circle]" />}
        >
          事件二
        </DTimeline.Item>
        <DTimeline.Item label="2025-03-01" icon={YourCustomIcon()}>
          事件三
        </DTimeline.Item>
        <DTimeline.Item label="2025-04-01" icon={<span class="w-6 h-6 icon-[tdesign--circle]" />}>
          事件四
        </DTimeline.Item>
      </DTimeline>
    </div>
  )
}

export default TimelineContain
