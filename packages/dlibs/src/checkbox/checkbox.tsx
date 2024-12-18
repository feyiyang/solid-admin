import { children, splitProps, type ComponentProps } from "solid-js"

import { Checkbox } from "@kobalte/core/checkbox"

const Root = (props: ComponentProps<any>) => {
  const [local, rest] = splitProps(props, ["children", 'indeterminate'])
  const cld = children(() => local.children)
  let ckRef: any
  
  return (
    <Checkbox class="enn-checkbox-label" {...rest}>
      <Checkbox.Input ref={ckRef} />
      <Checkbox.Control class='enn-checkbox' classList={{ 'enn-checkbox-indeterminate': local.indeterminate }} aria-checked={ckRef.checked} as="button" />
      <Checkbox.Label class="enn-label-text">
        {cld()}
      </Checkbox.Label>
    </Checkbox>
  )
}

export const DCheckbox = Object.assign(Root, {})