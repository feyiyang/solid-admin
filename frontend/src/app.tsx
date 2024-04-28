import { Component } from 'solid-js'
import IconsComp from './pages/icons/icons'

const App: Component = (props: any) => (
  <>
  {props.children}
  {false && (<IconsComp />)}
  </>)

export default App
