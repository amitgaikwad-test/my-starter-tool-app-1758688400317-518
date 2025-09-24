import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return <h1>Welcome Home</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      </div>
    </div>
  );
}

export default App;