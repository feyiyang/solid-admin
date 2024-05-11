import { type Component, children, splitProps } from 'solid-js'
import { Select as KSelect } from '@kobalte/core'

const Root: Component<KSelect.SelectRootProps<any>> = (props) => {
  const [local, rest] = splitProps(props, ['children'])
  return (
    <KSelect.Root
      as="div"
      optionValue="value"
      optionTextValue="label"
      {...rest}
    >
      <KSelect.Trigger class="flex w-full enn-select enn-select-bordered enn-select-sm pr-2 justify-between bg-none">
        <KSelect.Value>
          {(state) => (state.selectedOption() as any).label}
        </KSelect.Value>
        <KSelect.Icon>
          <span class="icon-[tdesign--chevron-down]"></span>
        </KSelect.Icon>
      </KSelect.Trigger>
      <KSelect.Portal>
        <KSelect.Content class="enn-select-content">
          <KSelect.Listbox class="enn-dropdown-content" />
        </KSelect.Content>
      </KSelect.Portal>
    </KSelect.Root>
  )
}

const Option: Component<any> = (props) => {
  return (
    <KSelect.Item class="select-item" item={props.item} {...props}>
      <KSelect.Label>{props.label}</KSelect.Label>
      <KSelect.ItemIndicator
        as="span"
        class="select__item-indicator inline-flex"
      >
        <span class="icon-[tdesign--check]"></span>
      </KSelect.ItemIndicator>
    </KSelect.Item>
  )
}

export const DSelect = {
  Root,
  Option
}
