import Home from "./pages/home/index.tsx";
import React from "react";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
    <div className="App">
      <Home />
    </div>
    </ParallaxProvider>
  );
}

export default App;
