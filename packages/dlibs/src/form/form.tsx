import { Component, children, splitProps } from "solid-js"
import { createForm } from '@felte/solid'

let validate: any = () => {
  throw Error('还未创建表单')
}
const FormComp: Component<any> = (props) => {
  const [local, rest] = splitProps(props, ['children', 'onSubmit'])
  const cld = children(() => local.children)
  const { form, createSubmitHandler, validate: cvalid } = createForm({
    
  })
  validate = cvalid
  local.onSubmit = () => createSubmitHandler()
  return (
    <form use:form {...rest}>
      {cld()}
    </form>
  )
}

const Item: Component<any> = (props) => {
  return (
    <></>
  )
}


export const DForm = {
  Form: FormComp,
  validate
}