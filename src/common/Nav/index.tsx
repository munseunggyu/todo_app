import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../context/userInfo";

const NavContainer = styled.nav`
  background-color: royalblue;
  padding: 20px 50px;
  color: white;
  ul {
    display: flex;
    justify-content: right;
    gap: 16px;
    line-height: 16px;
  }

  h1 a {
    color: white;
    font-size: 24px;
    font-weight: 700;
  }
  a {
    color: white;
    font-size: 14px;
  }
  button {
    font-size: 14px;
    color: white;
  }
`;

export default function Nav() {
  const { state, dispatch } = useContext(AuthContext);
  const logOut = () => {
    dispatch({ type: "logout" });
    localStorage.removeItem("Access Token");
    alert("로그아웃 되었습니다.");
  };

  return (
    <NavContainer>
      <h1>
        <Link to="/">ToDoList</Link>
      </h1>
      <ul>
        {state.token ? (
          <li>
            <button onClick={logOut}>로그아웃</button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/">로그인</Link>
            </li>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
          </>
        )}
        {/* <li>
          <button>로그아웃</button>
        </li> */}
      </ul>
    </NavContainer>
  );
}
