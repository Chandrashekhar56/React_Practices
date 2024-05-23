import React, { useState } from 'react';
import Child from './child';

function Parents() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child value={count} callback={() => setCount(count + 1)} />
    </div>
  );
}
export default Parents;
