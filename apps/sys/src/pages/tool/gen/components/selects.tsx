import type { Component, ComponentProps } from 'solid-js'
import { DSelect } from 'dlibs'

const selectContain: Component<ComponentProps<any>> = () => {
  const options: any[] = [
    {
      value: '选项1',
      label: '黄金糕'
    },
    {
      value: '选项2',
      label: '双皮奶'
    },
    {
      value: '选项3',
      label: '蚵仔煎'
    },
    {
      value: '选项4',
      label: '龙须面'
    },
    {
      value: '选项5',
      label: '北京烤鸭'
    }
  ]
  return (
    <div class="gap-4">
      <div class="enn-divider enn-divider-start">基本用法</div>
      <DSelect.Root
        class="w-44"
        placeholder="请选择"
        options={options}
        itemComponent={(props: any) => {
          return <DSelect.Option item={props.item} label={props.item.rawValue.label} />
        }}
      />
      <div class="enn-divider enn-divider-start">有禁用选项</div>
      <DSelect.Root
        class="w-44"
        placeholder="请选择"
        options={options}
        itemComponent={(props: any) => {
          if (props.item.rawValue.value === '选项3') {
            props.item.disabled = true
          }
          return <DSelect.Option item={props.item} label={props.item.rawValue.label} />
        }}
      />
      <div class="enn-divider enn-divider-start">禁用状态</div>
      <DSelect.Root
        class="w-44"
        placeholder="禁用"
        options={options}
        disabled
        itemComponent={(props: any) => (
          <DSelect.Option item={props.item} label={props.item.rawValue.label} />
        )}
      />
      <div class="enn-divider enn-divider-start">可清空单选</div>
      <DSelect.Root
        class="w-44"
        placeholder="请选择"
        options={options}
        itemComponent={(props: any) => {
          return <DSelect.Option item={props.item} label={props.item.rawValue.label} />
        }}
        clearable
      />
      <div class="enn-divider enn-divider-start">基础多选</div>
      <DSelect.Root
        class="w-56"
        placeholder="请选择"
        options={options}
        multiple
        clearable
        itemComponent={(props: any) => (
          <DSelect.Option item={props.item} label={props.item.rawValue.label} />
        )}
      />
    </div>
  )
}

export default selectContain
