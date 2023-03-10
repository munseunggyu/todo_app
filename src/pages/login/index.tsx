import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Nav from "../../common/Nav";
import { useSgin } from "../../hooks/useSgin";

interface ILoginForm {
  email: string;
  password: string;
}

const formSchema = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해주세요")
    .email("이메일 형식이 아닙니다."),
  password: yup
    .string()
    .required("영문, 숫자포함 8자리를 입력해주세요.")
    .min(8, "최소 8자 이상 가능합니다")
    .max(15, "최대 15자 까지만 가능합니다"),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
  //   "영문 숫자포함 8자리를 입력해주세요."
  // ),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(formSchema),
  });
  const { handleSgin: handleSignIn, error } = useSgin(
    "/users/login",
    "로그인이 완료되었습니다."
  );

  return (
    <>
      <Nav />
      <form onSubmit={handleSubmit(handleSignIn)}>
        <fieldset>
          <legend>로그인</legend>

          <label htmlFor="myEmail">email : </label>
          <input type="email" id="myEmail" {...register("email")} />

          <p> {errors.email?.message} </p>

          <br />
          <br />

          <label htmlFor="myPassWord">password : </label>
          <input
            type="password"
            id="myPassWord"
            placeholder="8자 이상"
            {...register("password")}
          />
          <button type="submit">로그인</button>
          <p> {errors.password?.message} </p>
          {error && <p> 아이디 또는 비밀번호가 일치하지 않습니다. </p>}
          <br />
          <br />
        </fieldset>
      </form>
    </>
  );
}
