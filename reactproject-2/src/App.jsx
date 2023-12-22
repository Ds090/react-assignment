import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <section className='w-[400px] h-[500px] bg-[#ff4957] flex justify-center items-center rounded'>
      <div className="card flex flex-col gap-2">
      <div className='text-center text-[25px] font-mono font-bold'>{count}</div>
        <div className='flex gap-3'><button onClick={() => setCount((count) => count - 1)} className='border py-1 px-5 text-[18px] font-mono font-semibold hover:bg-gray-800 hover:transition hover:ease-linear hover:delay-150 hover:duration-300 rounded-md shadow-md shadow-black'>
         Decrement
        </button>
        <button onClick={() => setCount((count) => count + 1)} className='border py-1 px-5 text-[18px] font-mono font-semibold hover:bg-gray-800 hover:transition hover:ease-linear hover:delay-150 hover:duration-300 rounded-md shadow-md shadow-black'>
         Increment
        </button></div>
      </div>
    </section>
  )
}

export default App
