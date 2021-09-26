import * as React from "react";
import { render } from "react-dom";
import layoutBasic from "./demos/layout/basicLayout";
import buttonBasic from "./demos/button/buttonBasic";
import "@element-react-next/theme-chalk/src/index.scss";

const rootEl = document.getElementById("root");

const demos = {
  layoutBasic,
  buttonBasic,
};

function App() {
  return (
    <ul>
      {Object.keys(demos).map((key) => (
        <li key={key}>
          <h3>{key}</h3>
          {demos[key]()}
        </li>
      ))}
    </ul>
  );
}

render(<App />, rootEl);
