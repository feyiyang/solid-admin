import { type Component, splitProps, ComponentProps, Show, For } from 'solid-js'
import { Select as KSelect } from '@kobalte/core'

const Root: Component<KSelect.SelectRootProps<any> & ComponentProps<any>> = (
  props
) => {
  const [local, rest] = splitProps(props, [
    'children',
    'options',
    'optionTextValue',
    'clearable'
  ])
  return (
    <KSelect.Root
      as="div"
      options={local.options || []}
      optionValue="value"
      optionTextValue={local.optionTextValue}
      {...rest}
    >
      <KSelect.Trigger
        class="flex w-full enn-select enn-select-bordered enn-select-sm pr-2 justify-between bg-none"
        classList={{
          'enn-select-disabled': props.disabled,
          'enn-select-multiple': props.multiple
        }}
        as="div"
      >
        <KSelect.Value class="enn-select-values">
          {(state) => (
            <>
              <For each={state.selectedOptions()}>
                {(option: any) => (
                  <span
                    class="enn-value-item"
                    onPointerDown={(e) => e.stopPropagation()}
                  >
                    {option.label}
                    <Show when={props.multiple}>
                      <button
                        class="enn-btn-clear"
                        onClick={() => state.remove(option)}
                      >
                        <i class="icon-[tdesign--close]" />
                      </button>
                    </Show>
                  </span>
                )}
              </For>
              <Show when={props.clearable}>
                <span
                  class="icon-[tdesign--close-circle] enn-btn-clearall"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={state.clear}
                />
              </Show>
            </>
          )}
        </KSelect.Value>
        <KSelect.Icon class="chevron-down">
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
    <KSelect.Item
      class="select-item"
      classList={{
        'select-item-disabled': local.item.disabled
      }}
      item={local.item}
      {...rest}
    >
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
