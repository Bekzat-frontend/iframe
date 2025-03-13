
import React, { useState } from "react";
import Inputter from "./components/Inputter";

function App() {
  const [state, setState] = useState("");
  const [btn, setBtn] = useState([]);
  console.log(state);

  const handleInput = (e) => {
    setState(e.target.value);
  };
  const handleButton = () => {
    if (state.trim() !== "") {
      setBtn([...btn, state]);
      setState("");
    }
  };
  const handlerInputCreate = (e) => {
    if (e.key === "Enter") {
      handleButton();
    }
  };
  return (
    <div>
      <iframe
        src="https://readlang.com/en/library"
        width="300px"
        height="200px"
      ></iframe>
      <Inputter
        onChange={handleInput}
        placeholder="наме"
        value={state}
        onKeyDown={handlerInputCreate}
      />
      <button onClick={handleButton}>click</button>
      {btn.map((items, index) => (
        <div key={index}>
          <p>{items}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
