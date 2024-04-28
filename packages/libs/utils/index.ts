import {mergeProps} from 'solid-js'

export function clsPre(str: string) {
  return str.replace(/(\w+\-?\w+)/g, 'chai-$1')
}

export function mergeDefaultProps<T extends Record<string, any>>(
  defaultProps: Partial<T>,
  props: T
): T {
  return mergeProps(defaultProps, props)
}