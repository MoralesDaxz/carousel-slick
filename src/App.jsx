import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CarouselOpinions } from './components/CarouselOpinions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full flex justify-center'>
        <CarouselOpinions></CarouselOpinions>
      </div>
    </>
  )
}

export default App
