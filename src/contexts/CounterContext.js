import { useState, createContext, useContext } from "react";

const CounterContext = createContext();

const CounterContextProvider = (props) => {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count + 1);
  }
  function decreaseCount() {
    count === 0 ? setCount(count) : setCount(count - 1);
  }

  const value = {
    count,
    increaseCount,
    decreaseCount,
  };
  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);

export default CounterContextProvider;
