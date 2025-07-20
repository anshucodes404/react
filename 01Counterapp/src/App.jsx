import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);  //this will increase the count only once not by 4, because UI updatation will be sent in batches and in One batch all will do the same thing

    //set function has a callback which gives the prev State of the variable
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1) //now increses by 4 
  };

  const decrease = () => {
    if (count - 1 < 0) {
      alert("Can't go to negative numbers");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>This is a Counter app</h1>
      <div>Count: {count}</div>
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </>
  );
}

export default App;
