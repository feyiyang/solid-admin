import { type Component } from 'solid-js'

const NotFound: Component = (props) => {
  return (
    <>
      404
      <div class="divider">page not found</div>
      {props.children}
    </>
  )
}

export default NotFound
