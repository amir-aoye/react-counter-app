import { useState } from "react";
import "./App.css";

function App() {
  const [mainNumber, setMainNumber] = useState(0);

  return (
    <>
      <p
        className={`number ${
          mainNumber > 0 ? "text-green" : mainNumber < 0 ? "text-red" : ""
        }`}
      >
        {mainNumber}
      </p>

      <div className="buttons">
        <button onClick={() => setMainNumber(mainNumber - 1)}>-</button>
        <button onClick={() => setMainNumber(0)}>Reset</button>
        <button onClick={() => setMainNumber(mainNumber + 1)}>+</button>
      </div>
    </>
  );
}

export default App;
