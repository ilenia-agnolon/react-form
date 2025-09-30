import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import ArticlesList from "./components/form/ArticlesList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ArticlesList />
    </>
  );
}

export default App;
