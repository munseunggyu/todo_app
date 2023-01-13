import React from "react";
import Router from "./router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { AuthContextProvider } from "./context/userInfo";
function App() {
  const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
  box-sizing: border-box;

  }
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
      <AuthContextProvider>
        <GlobalStyle />
        <Router />
      </AuthContextProvider>
    </>
  );
}

export default App;
