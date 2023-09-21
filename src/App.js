import React from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="App bg-zinc-800 w-full h-[100rem] text-orange-500 p-5">
      <Header />
      <Stats />
    </div>
  );
}

export default App;
