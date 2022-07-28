import React from "react";
import D from "./공룡.jpeg";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <img src={D} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
