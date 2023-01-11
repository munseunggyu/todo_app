import React from "react";
import Router from "./router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
function App() {
  const GlobalStyle = createGlobalStyle`
  ${reset}
`;
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
