import React from "react";
import ReactDOM from "react-dom/client";
import App from "./component/app";
import "./index.css";

function Main() {
  return (
    <>
      <App />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
