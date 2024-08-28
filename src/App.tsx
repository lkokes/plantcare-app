import React from "react";

import "./App.css";
import ItemList from "./containers/ItemList/ItemList";

function App() {
  return (
    <div className="App">
      <header className="bg-gray-800 text-white p-4 text-center text-2xl">
        Naše rastlinky
      </header>
      <div className="container mx-auto mt-8">
        <ItemList />
      </div>
    </div>
  );
}

export default App;
