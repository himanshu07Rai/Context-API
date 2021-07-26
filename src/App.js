import "./App.css";
import CounterContextProvider from "./contexts/CounterContext";
import MyCounter from "./components/MyCounter";
import ComponentA from "./components/ComponentA";
function App() {
  return (
    <CounterContextProvider>
      <div className="App">
        <h1>Context API</h1>
        <ComponentA />
        <MyCounter />
      </div>
    </CounterContextProvider>
  );
}

export default App;
