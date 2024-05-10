import { children, splitProps, type Component } from 'solid-js'
import { Dialog } from '@kobalte/core'
// import { DialogContext } from "./dialog-context"

const Root: Component<any> = (props) => {
  const [local, rest] = splitProps(props, [
    'title',
    'modal',
    'children',
    'class'
  ])
  const cld = children(() => local.children)
  return (
    <Dialog.Root {...rest}>
      <Dialog.Portal>
        <div class={`enn-modal enn-modal-open`} role="dialog">
          <Dialog.Content
            class={`enn-dialog-content enn-modal-box ${local.class}`}
          >
            {local.title && (
              <Dialog.Title class="enn-dialog-title" as="h3">
                {local.title}
              </Dialog.Title>
            )}
            {cld()}
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const Footer: Component<any> = (props) => {
  return (
    <div class="enn-modal-action" {...props} />
  )
}

export const DDialog = {
  Root,
  Footer
}
