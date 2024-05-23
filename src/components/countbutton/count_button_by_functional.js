import { useState, useEffect, React } from 'react';

function CountButton(props) {

  const [count, setCount] = useState(0);

  useEffect(() => { console.log("component mounted"); }, []);

  const handleClick = () => {
    // setCount((prev) => prev + count + 1);
    // setCount((prev) => prev + count + 1);
    // setCount((prev) => prev + count + 1);
    // setCount((prev) => prev + count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{props.name}</h1>
      <p>Count:{count}</p>
      <button onClick={handleClick}>click me</button>
    </div>
  )
}
export default CountButton