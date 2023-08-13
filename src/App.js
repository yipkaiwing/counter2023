import Counter from './Counter'
import { useState, useEffect } from 'react';

const App = () => {
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(10);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(count1 + count2);
  }, [count1, count2])

  const changeHandlerC1 = (value) => {
    setCount1(count1 + value)
  }

    const changeHandlerC2 = (value) => {
      setCount2(count2 + value)
  }

  return (
    <div className=' flex justify-center items-center min-h-screen bg-slate-100 gap-x-4'>
      <Counter 
        value = {count1} 
        onValueChanged = {changeHandlerC1}
      />

      <div className=' text-6xl font-bold'>
        +
      </div>

      <Counter 
        value = {count2} 
        onValueChanged = {changeHandlerC2}
      />

      <div className=' text-6xl font-bold min-w-max'>
        <div> = <span className={`${sum >=0 ? 'text-green-400' : 'text-red-400'}`}>{sum}</span></div>
        {/* <div> = <span className={`text-${sum >=0 ? 'green' : 'red' } -500`}>{sum}</span></div> */}
        <div className=' text-slate-300'> 
          {sum < 0 && <>&lt; 0</>}
          {sum === 0 && <>= 0</>}
          {sum > 0 && <>&gt; 0</>}
         </div>
      </div>
    </div>
  )
}
export default App;