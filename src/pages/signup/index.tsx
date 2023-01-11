import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Nav from "../../common/Nav";

interface ISignUpForm {
  email: string;
  password: string;
  password_confirm: string;
}

export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignUpForm>();
  const handleSignUp = async (data: any) => {
    await axios
      .post(`http://localhost:8080/users/create`, {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        localStorage.setItem("Access Token", res.data.token);
        alert("회원가입이 완료되었습니다.");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Nav />
      <form onSubmit={handleSubmit(handleSignUp)}>
        <fieldset>
          <legend>회원가입</legend>

          <label htmlFor="myEmail">email : </label>
          <input
            type="email"
            id="myEmail"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />

          {errors.email?.type === "required" && <p>이메일을 입력해 주세요!</p>}
          {errors.email?.type === "validate" && (
            <p>이메일 형시에 맞게 작성해주세요!</p>
          )}
          <br />
          <br />

          <label htmlFor="myPassWord">password : </label>
          <input
            type="password"
            id="myPassWord"
            placeholder="8자 이상"
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password?.type === "required" && (
            <p>비밀번호를 입력해 주세요!</p>
          )}
          {errors.password?.type === "minLength" && (
            <p>최소 8자이상 입력해주세요!</p>
          )}
          <br />
          <br />

          <label htmlFor="myPassWord">password : </label>
          <input
            type="password"
            id="myPassWord"
            placeholder="비밀번호 확인"
            {...register("password_confirm", {
              required: true,
              validate: (value) =>
                value === watch("password") ? true : "비밀번호를 확인해주세요",
            })}
          />

          <button type="submit">회원가입</button>
          {errors.password_confirm && (
            <p> {errors.password_confirm.message} </p>
          )}
        </fieldset>
      </form>
    </>
  );
}
