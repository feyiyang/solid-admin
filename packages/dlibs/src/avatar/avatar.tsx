import {
  children,
  mergeProps,
  splitProps,
  type Component,
  type ComponentProps
} from 'solid-js'
import { type avatarProps, defaltProps, styleVariants } from './constant'

const Root: Component<avatarProps & ComponentProps<'img' | 'div'>> = (
  props
) => {
  const merged = mergeProps(defaltProps, props)
  const [local, rest] = splitProps(merged, [
    'class',
    'children',
    'image',
    'alt',
    'size',
    'shape',
    'presence'
  ])
  const cld = children(() => local.children)
  const clazz = `enn-avatar${local.presence ? ' ' + styleVariants.presence[local.presence] : ''} ${local.class || ''}`
  const hasCld = (): boolean => !!cld()
  const txtScale = () => {
    if (typeof cld() === 'string') {
      const len = (cld() as string).length
      return {
        transform: `scale(${len > 3 ? 0.5 : (5 - len) * 0.25})`,
        'white-space': len > 3 ? 'pre-line' : 'nowrap'
      }
    }
  }

  return (
    <div class={clazz} classList={{ ['enn-placeholder']: hasCld() }}>
      <div
        class={`${styleVariants.size[local.size]} enn-avatar-inner ${styleVariants.shape[local.shape]}`}
      >
        {hasCld() ? (
          <span class="text-2xl" style={txtScale()}>
            {cld()}
          </span>
        ) : (
          <img src={local.image} />
        )}
      </div>
    </div>
  )
}

const Group: Component<any> = (props) => {
  return <div class="enn-avatar-group -space-x-6" {...props} />
}

export const DAvatar = Object.assign(Root, {
  Group
})
