import './App.css'
import useCurrentDate from './hooks/useCurrentDate'
import Timer from './components/Timer'
import Calculator from './components/Calculator'

function App() {
  const date = useCurrentDate();
  return (
    <>
     
      <Timer time={date} />
      <Calculator />
    </>
  )
}

export default App
