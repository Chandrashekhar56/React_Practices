import { useState, useCallback } from "react";
import Todos from "./todos";

function UseCallback() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((pre) => [...pre, "New Todo"]);
  }, []);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
export default UseCallback
