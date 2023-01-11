import React from "react";
import Router from "./router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
function App() {
  const GlobalStyle = createGlobalStyle`
  ${reset}
  button{
    cursor: pointer;
    border:0;
    background-color:transparent;
  }
  a{
    color:black;
    text-decoration:none;
  }
`;
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
