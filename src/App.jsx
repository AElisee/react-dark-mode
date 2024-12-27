import React from "react";
import Header from "./components/Header.jsx";

const App = () => {
  return (
    <div className="">
      <Header />
      <h1 className="text-red-300 dark:text-indigo-800 p-3">
        Light && Dark mode
      </h1>
    </div>
  );
};

export default App;
