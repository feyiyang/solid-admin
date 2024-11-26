import { useNavigate } from '@solidjs/router'
import { registerTheme } from 'echarts'
import * as theme from './assets/theme/walden.json'
import IconsComp from './pages/icons/icons'
function App(props: any) {
  registerTheme('walden', { ...theme })
  const navigate = useNavigate()
  const authorized = sessionStorage.getItem('isLogin')

  if (!authorized) {
    navigate('/login', { replace: true })
  }
  return (
    <>
      {props.children}
      {false && <IconsComp />}
    </>
  )
}

export default App
