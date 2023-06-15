import React, {useCallback, useState } from 'react';

const App = (props: {message: string}) => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, [count]);

  return(
  <>
    <h1>{props.message}</h1>
    <h1>Count: {count}</h1>
    <button onClick={increment}>Increment</button>
  </>
  )
}

export default App;