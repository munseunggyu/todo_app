import React from "react";
import Nav from "../../common/Nav";

export default function SignUp() {
  return (
    <>
      <Nav />
      <form>
        <fieldset>
          <legend>회원가입</legend>

          <label htmlFor="myEmail">email : </label>
          <input type="email" id="myEmail" required />

          <label htmlFor="myPassWord">password : </label>
          <input type="password" id="myPassWord" required />

          <button type="submit">로그인</button>
        </fieldset>
      </form>
    </>
  );
}
