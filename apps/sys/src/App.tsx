import IconsComp from './pages/icons/icons'
function App(props: any) {
  return (
    <>
      {props.children}
      {false && <IconsComp />}
    </>
  )
}

export default App
