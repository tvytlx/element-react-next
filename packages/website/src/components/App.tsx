import * as React from "react";
import Layout from "../docs/layout.mdx";
import "./../assets/scss/App.scss";
import StyledMDX from "./StyledMDX";

function App() {
  return (
    <StyledMDX>
      <Layout />
    </StyledMDX>
  );
}

export default App;
