import React, { useRef } from "react";
import styled from "styled-components";
import History from "./History";

const Calculator = () => {
  const result = useRef(null);
  const garbage = useRef(null);
  const valueHist = useRef([]);
  const operationHist = useRef("");

  const handleClick = (ev) => {
    const value = ev.target.value;
    if (value == "=") {
      const resultOp = eval(operationHist?.current);
      result.current.value = resultOp;
      valueHist.current.push(resultOp);
      garbage.current.value = "";
      operationHist.current = "";
      return;
    }
    if (/[^0-9]/gi.test(value)) {
      garbage.current.value = "";
      if (value == "x") {
        operationHist.current += "*";
        return;
      }
      operationHist.current += value;
      return;
    }
    operationHist.current += value;
    garbage.current.value += value;
  };

  return (
    <Calc>
      <Machine>
        <div className="inputs">
          <input
            ref={result}
            type="text"
            placeholder="Calculating greet..."
            disabled
          />
          <input
            ref={garbage}
            type="text"
            pattern="[0-9\+\-x\/\(\)]"
            disabled
            accept="[0-9+-x/()]"
          />
        </div>
        <div className="numbers">
          <button onClick={handleClick} value={1}>
            1
          </button>
          <button onClick={handleClick} value={2}>
            2
          </button>
          <button onClick={handleClick} value={3}>
            3
          </button>
          <button onClick={handleClick} value={4}>
            4
          </button>
          <button onClick={handleClick} value={5}>
            5
          </button>
          <button onClick={handleClick} value={6}>
            6
          </button>
          <button onClick={handleClick} value={7}>
            7
          </button>
          <button onClick={handleClick} value={8}>
            8
          </button>
          <button onClick={handleClick} value={9}>
            9
          </button>
          <button className="zero" onClick={handleClick} value={0}>
            0
          </button>
          <button
            className="clear"
            onClick={(ev) => {
              garbage.current.value = "";
            }}
            value={0}
          >
            C
          </button>
        </div>
        <div className="operators">
          <button onClick={handleClick} value={"+"}>
            +
          </button>
          <button onClick={handleClick} value={"-"}>
            -
          </button>
          <button onClick={handleClick} value={"x"}>
            x
          </button>
          <button onClick={handleClick} value={"/"}>
            /
          </button>
          <button onClick={handleClick} value={")"}>
            )
          </button>
          <button onClick={handleClick} value={"("}>
            (
          </button>
          <button onClick={handleClick} value={"="}>
            =
          </button>
        </div>
      </Machine>
      <History value={valueHist?.current} />
    </Calc>
  );
};

const Calc = styled.div`
  display: flex;
  min-width: 500px;
  max-width: 700px;
  gap: 2rem;
`;

const Machine = styled.div`
  min-width: 300px;
  max-width: 500px;
  height: 80lvh;
  display: grid;
  grid-template-areas:
    "inp inp"
    "num op";
  grid-template-columns: 80% 20%;
  grid-template-rows: 15% 85%;

  & .inputs {
    grid-area: inp;
    display: grid;
    border: 1px solid #777;
    border-radius: 8px;
    
    & input {
      font-size: 1.2rem;
      outline: none;
      display: block;
      text-align: end;
      padding: 4px 12px;
      border: 1px solid transparent;
      background-color: #121212;
    }
    margin-bottom: 10px;
  }

  & .numbers {
    grid-area: num;
    padding: 5px;

    & button {
      width: 30%;
      aspect-ratio: 1;
      margin: 1.5%;
      font-size: 1.5rem;
    }

    & .zero {
      width: 45%;
      aspect-ratio: unset;
      height: 15%;
    }
    & .clear {
      width: 45%;
      aspect-ratio: unset;
      height: 15%;
      background-color: #535bf2;
    }
  }

  & .operators {
    grid-area: op;
    display: flex;
    flex-direction: column;
    gap: 2%;
    padding-right: 9%;

    & button {
      height: 12%;
      aspect-ratio: 1;
    }

    & button:last-child {
      background-color: lightgreen;
      color: #121212
    }
  }
`;

export default Calculator;
