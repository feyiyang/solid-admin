import {
  Component,
  ComponentProps,
  splitProps,
  mergeProps,
  JSX
} from 'solid-js'

const variants: { [key: string]: any } = {
  size: {
    medium: 'h-8 px-4 py-2',
    small: 'h-6 px-2 py-2',
    min: 'h-4 px-2 py-1'
  },
  type: {
    default: 'bg-stone-500 text-stone-500',
    primary: 'bg-indigo-500 text-indigo-50',
    success: 'bg-emerald-500 text-emerald-50',
    danger: 'bg-rose-500 text-rose-50'
    // 'primary' | 'default' | 'success' | 'warning' | 'danger' | 'info' | 'text'
  },
  rounded: ''
}
export type ButtonProps = ComponentProps<'button'> & {
  size?: keyof typeof variants.size
  of?: keyof typeof variants.type
  plain?: boolean
  rounded?: boolean
}
export const Button: Component<ButtonProps> = (props) => {
  const merged = mergeProps(
    {
      class: '',
      size: 'medium',
      type: 'button',
      plain: false,
      'native-type': 'button'
    },
    props
  )
  const [local, rest] = splitProps(merged, [
    'class',
    'type',
    'of',
    'native-type',
    'size',
    'plain',
    'rounded'
  ])
  const clazzName = `chai-btn chai-btn-${local.of as string} ${variants.size[local.size]} ${local.class}`
  return <button class={clazzName} type={props.type} {...rest} />
}
