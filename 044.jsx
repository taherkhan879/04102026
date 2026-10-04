import { useState } from "react";
import "./index.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount(prevCount => prevCount+1)
  }

  return (
    <div className="container">
      <h1 className="heading">Counter</h1>
      <p className="count">{count}</p>
      <div>
        <button className="button" onClick={onIncrement}>
          Increase
        </button>
        <button className="button">Decrease</button>
      </div>
    </div>
  );
};

export default Counter;
