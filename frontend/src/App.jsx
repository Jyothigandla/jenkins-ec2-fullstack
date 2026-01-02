import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("http://98.92.198.73:3000/api")
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(() => setMsg("Backend not reachable"));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Jenkins → EC2 Full-Stack App</h1>
      <h3>{msg}</h3>
    </div>
  );
}

export default App;


