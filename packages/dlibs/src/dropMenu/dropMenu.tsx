import { Component, createSignal, createContext, For, splitProps } from "solid-js"
import { DropdownMenu } from "@kobalte/core/dropdown-menu"

const MenuContext = createContext()
const Root: Component<any> = (props) => {
  const [open, setOpen] = createSignal(false);
  return <MenuContext.Provider value={{ setOpen }}><DropdownMenu open={open()} onOpenChange={setOpen} {...props} /></MenuContext.Provider>
}

const Trigger: Component<any> = (props) => {
  return <DropdownMenu.Trigger {...props} />
}

const Contain: Component<any> = (props) => {
  const [local] = splitProps(props, ['items', 'class', 'value', 'onSelect'])
  const cls = `z-10 ${local.class || ''} bg-base-100 border`
  return <DropdownMenu.Portal>
    <DropdownMenu.Content class={cls}>
      <DropdownMenu.RadioGroup value={local.value} onChange={local.onSelect}>
        <For each={local.items}>
          {(item: any) => (
            <DropdownMenu.RadioItem class="my-1 p-2 cursor-pointer hover:bg-slate-200" classList={{'bg-slate-200': item.value == local.value}} value={item.value} closeOnSelect>
              {item.label}
            </DropdownMenu.RadioItem>
          )}
        </For>
      </DropdownMenu.RadioGroup>
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
}

export const DropMenu = {
  Root,
  Trigger,
  Contain
}