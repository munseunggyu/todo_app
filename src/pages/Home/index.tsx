import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../common/Nav";
// const Header = styled.header`
//   padding: 15px;
//   display: flex;
//   gap: 5px;
//   justify-content: flex-end;
//   button {
//     font-size: 16px;
//   }
// `;

export default function Home() {
  return (
    <>
      <Nav />
    </>
  );
}
