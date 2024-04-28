import { Component, ComponentProps, splitProps } from 'solid-js'

type CardProps = {
  rounded?: boolean
  shadow?: boolean
}

export const Card: Component<CardProps & ComponentProps<'div'>> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'classList'])
  const classNames = `chai-card ${local.class} ${props.rounded ? 'rounded' : ''} ${props.shadow ? 'shadow' : ''}`

  return <div class={classNames} chai-p-4 chai-bg-white {...rest} />
}

// export const CardHeader: Com
