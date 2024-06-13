import { type Component, splitProps, createEffect } from 'solid-js'
import { Select as KSelect } from '@kobalte/core'

const Root: Component<KSelect.SelectRootProps<any>> = (props) => {
  const [local, rest] = splitProps(props, ['children', 'options', 'optionTextValue'])
  return (
    <KSelect.Root
      as="div"
      options={local.options || []}
      optionValue="value"
      optionTextValue={local.optionTextValue}
      {...rest}
    >
      <KSelect.Trigger class="flex w-full enn-select enn-select-bordered enn-select-sm pr-2 justify-between bg-none" as="div">
        <KSelect.Value>
          {(state) => {
            return <div>
              {(state.selectedOption() as any)[local.optionTextValue || 'label' as any]}
              <span class="icon-[tdesign--close]" />
            </div> 
          }}
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
  const [local, rest] = splitProps(props, ['item', 'label'])
  return (
    <KSelect.Item class="select-item" item={local.item} {...rest}>
      <KSelect.Label>{local.label}</KSelect.Label>
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
