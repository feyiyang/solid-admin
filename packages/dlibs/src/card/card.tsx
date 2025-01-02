import {
  children,
  Show,
  splitProps,
  type Component,
  type ComponentProps
} from 'solid-js'

const Root: Component<ComponentProps<any>> = (props) => {
  const [local] = splitProps(props, [
    'class',
    'children',
    'title',
    'cover',
    'alt',
    'overlay'
  ])
  const cld = children(() => local.children)
  const clazz = `enn-card shadow ${local.class || ''}`
  return (
    <div class={clazz} classList={{ ['enn-image-full']: local.overlay }}>
      <Show when={typeof local.cover == 'string'} fallback={<>{local.cover}</>}>
        <figure>
          <img src={local.cover} alt={local.alt} />
        </figure>
      </Show>
      <div class="enn-card-body">
        <h2 class="enn-card-title">{local.title}</h2>
        {cld()}
      </div>
    </div>
  )
}

const Cover: Component<ComponentProps<any>> = () => {
  return <></>
}

const Action: Component<ComponentProps<any>> = (props) => {
  const [local, rest] = splitProps(props, ['class'])
  return (
    <div
      class={`enn-card-actions justify-end ${local.class || ''}`}
      {...rest}
    />
  )
}

export const DCard = Object.assign(Root, {
  Cover,
  Action
})
