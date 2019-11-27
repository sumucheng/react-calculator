import React, { useState } from "react";
import "./App.css";
import calculate from "./logic.js";

function Display(props) {
  return (
    <div className="display">
      <span>{props.result}</span>
    </div>
  );
}

function Button(props) {
  const clickCalculate = () => {
    props.onClick(props.name);
  };
  return (
    <div>
      <button
        className={`btn ${props.wide ? "wide" : ""}`}
        onClick={clickCalculate}
      >
        {props.name}
      </button>
    </div>
  );
}

function Board(props) {
  const clickCalculate = buttonName => {
    props.onClick(buttonName);
  };

  return (
    <div className="board">
      <div className="board-row">
        <Button name="AC" onClick={clickCalculate} />
        <Button name="+/-" onClick={clickCalculate} />
        <Button name="%" onClick={clickCalculate} />
        <Button name="÷" onClick={clickCalculate} />
      </div>
      <div className="board-row">
        <Button name="7" onClick={clickCalculate} />
        <Button name="8" onClick={clickCalculate} />
        <Button name="9" onClick={clickCalculate} />
        <Button name="x" onClick={clickCalculate} />
      </div>
      <div className="board-row">
        <Button name="4" onClick={clickCalculate} />
        <Button name="5" onClick={clickCalculate} />
        <Button name="6" onClick={clickCalculate} />
        <Button name="-" onClick={clickCalculate} />
      </div>
      <div className="board-row">
        <Button name="1" onClick={clickCalculate} />
        <Button name="2" onClick={clickCalculate} />
        <Button name="3" onClick={clickCalculate} />
        <Button name="+" onClick={clickCalculate} />
      </div>
      <div className="board-row">
        <Button name="0" onClick={clickCalculate} wide />
        <Button name="." onClick={clickCalculate} />
        <Button name="=" onClick={clickCalculate} />
      </div>
    </div>
  );
}

function App() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const clickCalculate = buttonName => {
    const newState = calculate(
      {
        total: total,
        next: next,
        operation: operation
      },
      buttonName
    );
    newState.total !== undefined && setTotal(newState.total);
    newState.next !== undefined && setNext(newState.next);
    newState.operation !== undefined && setOperation(newState.operation);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Display result={next || total || "0"}></Display>
        <Board onClick={clickCalculate}></Board>
      </div>
    </div>
  );
}

export default App;
