import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // {/* </React.StrictMode> */ 잘 실행되는지 알기 위해 더블체크(두번 콘솔창에 찍힘)}
);
