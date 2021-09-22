import * as React from "react";
import { render } from "react-dom";
import Layout from "./demos/layout";
import "@element-react-next/theme-chalk/src/index.scss";

const rootEl = document.getElementById("root");

function App() {
  return <Layout></Layout>;
}

render(<App />, rootEl);
