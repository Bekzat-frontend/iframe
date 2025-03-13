// import TodoApp from "./UI/TodoApp";

// function App() {
//   return (
//     <div>
//       <TodoApp />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import Inputter from "./components/Inputter";

// function App() {
//   const [input, setInput] = useState("");
//   const [button, setButton] = useState([]);

//   console.log(input);
//   const handleCleare = () => {
//     setButton([]);
//     setInput("");
//   };
//   const handleInput = (e) => {
//     setInput(e.target.value);
//   };
//   const handleButton = () => {
//     if (input.trim() !== "") {
//       setButton([...button, input]);
//       setInput("");
//     }
//   };
//   const handleDelete = (index) => {
//     setButton(button.filter((id) => id !== id));
//   };
//   return (
//     <div>
//       <Inputter
//         onChange={handleInput}
//         placeholder="написать имя  "
//         value={input}
//       />
//       <button onClick={handleButton}>add</button>
//       <button onClick={handleCleare}>cleare</button>
//       <p>
//         {button.map((item, index) => (
//           <div key={index}>
//             <p>{item}</p> <button onClick={handleDelete}>the key</button>
//           </div>
//         ))}
//       </p>
//     </div>
//   );
// }

// export default App;
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
