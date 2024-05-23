import { useState,useMemo,React} from 'react';

export default function UseMemo3() {
    const [count,setCount]=useState(0);
    const [item,setItem]=useState(5);

   /* 
   function multicount()
    {
        console.warn("multicount");
        return count*5;
    }
    */

   const multiCountVal=useMemo(function multicount(){
       console.warn("multicount");
       return count*5;
   },[count]);

  return (
    <div>
        <h2>Count:{count}</h2>
        <h2>Item:{item}</h2>
        <h3>{multiCountVal}</h3>
        <button onClick={()=>setCount(count+1)}>Update count</button>
        <button onClick={()=>setItem(item*10)}>Update item</button>
    </div>
  )
}
