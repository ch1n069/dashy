import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/home/home";
// import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  // const [count, setCount] = useState(0);
  const router = createBrowserRouter([{ path: "/", element: Home }]);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
