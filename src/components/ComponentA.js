import { useCounter } from "../contexts/CounterContext";

const ComponentA = () => {
  console.log(7);

  const { count } = useCounter();
  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
};

export default ComponentA;
