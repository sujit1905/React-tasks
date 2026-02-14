import { useEffect, useState } from "react";


function App() {
  const [count, setCount] = useState(0);


  // use effect is used when you want to side load some activity
  useEffect(() => {
    console.log("useEffect is Running");
  }); // [count] -> agar me dependency banata hoon to bas usi ke liye hi useEffect chalega
  // agar dependency empty hai to useEffect kisi pe denpend nahi hogi or unnecessary chalengi

  return (
    <div>
      
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count +
      </button>
    </div>
  );
}

export default App;