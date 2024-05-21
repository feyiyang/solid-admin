import { registerTheme } from 'echarts'
import * as theme from './assets/theme/walden.json'
import IconsComp from './pages/icons/icons'
function App(props: any) {
  registerTheme('walden', {...theme})
  return (
    <>
      {props.children}
      {false && <IconsComp />}
    </>
  )
}

export default App
