import { useState } from "react";

function Greet() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      Hello <br />
      <h1>{count}</h1>
      <button>Increment</button>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
}

export default Greet;
