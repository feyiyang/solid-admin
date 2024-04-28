import { Component, createResource, ErrorBoundary, JSXElement, Show, Suspense} from 'solid-js'
import { getSlots, Slot } from './Slot'

interface AsyncProps<T> {
  promise: Promise<T>
  children: JSXElement | ((data: T) => JSXElement)
}

export const Async: <T>(props: AsyncProps<T>) => JSXElement = <T,>(props: AsyncProps<T>) => {
  const slots = getSlots(props.children as JSXElement)
  const then = slots.default as (data: T) => JSXElement
  const [data] = createResource(
    () => props.promise,
    () => props.promise
  )

  return (
    <Suspense fallback={slots.await}>
      <ErrorBoundary fallback={slots.catch}>
        <Show when={data()}>{then(data()!)}</Show>
      </ErrorBoundary>
    </Suspense>
  )
}

export const Await: Component<{ children: JSXElement }> = (props) => {
  return <Slot name='await'>{props.children}</Slot>
}

export const Catch: Component<{ children: JSXElement }> = (props) => {
  return <Slot name='catch'>{props.children}</Slot>
}