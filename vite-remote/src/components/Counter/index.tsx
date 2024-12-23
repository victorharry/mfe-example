import { useState } from 'react'
import { Button } from '../ui/button'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className=' space-y-4'>
      <h1>Current Value</h1>
      <h2 className='text-6xl'><b>{count}</b></h2>
      <Button className='min-w-64 h-14 text-2xl' onClick={() => setCount((prev) => prev + 1)}>Increase</Button>
    </div>
  )
}

export default Counter
