import React, { Component, useState } from "react";

// ========   useing class ==========
/*
interface State {
  count: number;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  makeIncrementer = (amount: number) => () =>
    this.setState((prevState: State) => ({
      count: prevState.count + amount,
    }));

  increment = this.makeIncrementer(1);

  render() {
    return (
      <div>
        <p>Count : {this.state.count}</p>
        <button className="increment" onClick={this.increment}>
          Increment count
        </button>
      </div>
    );
  }
}
*/
// ========   useing hooks ==========

function App() {
  const [countNum, setCountNum] = useState(0);

  function handleClick() {
    setCountNum((prevNum) => prevNum + 1);
  }
  return (
    <div>
      <p>Count : {countNum}</p>
      <button onClick={handleClick}>Increment count</button>
    </div>
  );
}

export default App;
