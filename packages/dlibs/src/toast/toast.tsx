import { Toast, toaster } from '@kobalte/core'

function show(opt: {message: string, type?: string}) {
  console.log(opt.type)
  const clazz = {
    'enn-alert-success': opt.type === 'success',
    'enn-alert-warning': opt.type === 'warning'
  }
  return toaster.show(props => (
    <>
      <Toast.Root toastId={props.toastId} class="enn-toast enn-toast-top enn-toast-center">
        <Toast.Description class="enn-alert text-white" classList={clazz}>
          {opt.message}
          <span class="w-4 h-4 icon-[tdesign--check-circle]"></span>
        </Toast.Description>
      </Toast.Root>
    </>
  ))
}

const Region = (props: any) => (
  <Toast.Region duration={3300} {...props} />
)

export const DToast = {
  show,
  Region,
  List: Toast.List
}