import { AlertDialog } from '@kobalte/core'
import { children, ComponentProps, Show, splitProps } from 'solid-js'
import { DButton } from '../button'

const Root = (
  props: AlertDialog.AlertDialogRootProps & ComponentProps<any>
) => {
  const [local, rest] = splitProps(props, [
    'children',
    'title',
    'maskClosable',
    'footer',
    'type',
    'onCancel',
    'onOk'
  ])
  const cld = children(() => local.children)
  return (
    <AlertDialog.Root modal={true} {...rest}>
      <AlertDialog.Portal>
        <div class="enn-modal enn-modal-open" role="dialog">
          <AlertDialog.Content
            class="enn-modal-box"
            onInteractOutside={(e) => {
              if (!local.maskClosable) {
                e.preventDefault()
                e.stopPropagation()
              }
            }}
          >
            <AlertDialog.Title class="text-lg" as="h3">
              {local.title}
            </AlertDialog.Title>
            <AlertDialog.Description class="enn-modal-desc" as="div">
              {cld()}
            </AlertDialog.Description>
            <Show when={local.footer !== null}>
              <div class="enn-modal-action">
                <DButton.Root
                  onClick={() => {
                    local.onCancel()
                  }}
                >
                  取消
                </DButton.Root>
                <DButton.Root
                  type="primary"
                  onClick={() => {
                    local.onOk()
                  }}
                >
                  确定
                </DButton.Root>
              </div>
            </Show>
          </AlertDialog.Content>
        </div>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

export const useAlertDialog = () => {
  const modal = {
    confirm() {
      return <Root type="confirm" />
    }
  }
  return {
    modal
  }
}

export const DAlertDialog = Object.assign(Root, {})
