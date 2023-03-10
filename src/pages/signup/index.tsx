import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Nav from "../../common/Nav";
import { useSgin } from "../../hooks/useSgin";

interface ISignUpForm {
  email: string;
  password: string;
  password_confirm: string;
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
    .max(15, "최대 15자 까지만 가능합니다")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
      "영문 숫자포함 8자리를 입력해주세요."
    ),
  password_confirm: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 다릅니다."),
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>({
    resolver: yupResolver(formSchema),
  });
  const { handleSgin: handleSignUp } = useSgin(
    "/users/create",
    "회원가입이 완료되었습니다."
  );

  return (
    <>
      <Nav />
      <form onSubmit={handleSubmit(handleSignUp)}>
        <fieldset>
          <legend>회원가입</legend>

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
          <p> {errors.password?.message} </p>
          <br />
          <br />

          <label htmlFor="myPassWord">password : </label>
          <input
            type="password"
            id="myPassWord"
            placeholder="비밀번호 확인"
            {...register("password_confirm")}
          />
          <button type="submit">회원가입</button>
          <p> {errors.password_confirm?.message} </p>
        </fieldset>
      </form>
    </>
  );
}
