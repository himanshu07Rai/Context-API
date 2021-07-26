import { useCounter } from "../contexts/CounterContext";
const MyCounter = () => {
  const { count, increaseCount, decreaseCount } = useCounter();
  console.log("render");

  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={increaseCount}>inc</button>
      <button onClick={decreaseCount}>dec</button>
    </div>
  );
};

export default MyCounter;
