import { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
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
    align-items: center;
    line-height: 16px;
    font-size: 14px;
  }

  h1 a {
    color: white;
    font-size: 24px;
  }
  a {
    color: white;
    font-size: 14px;
  }
  button {
    color: white;
    font-size: 14px;
    padding: 0;
  }
`;

export default function Nav() {
  const { state, dispatch } = useContext(AuthContext);
  const logOut = () => {
    dispatch({ type: "logout" });
    localStorage.removeItem("Access Token");
    alert("로그아웃 되었습니다.");
  };
  const location = useLocation();
  console.log(location.pathname);

  return (
    <NavContainer>
      <h1>
        <Link to="/">ToDoList</Link>
      </h1>
      <ul>
        {state.token ? (
          <>
            <li>
              {!location.pathname.includes("todofactory") && (
                <Link to="/todofactory">작성하기</Link>
              )}
            </li>
            <li>
              <button onClick={logOut}>로그아웃</button>
            </li>
          </>
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
      </ul>
    </NavContainer>
  );
}
