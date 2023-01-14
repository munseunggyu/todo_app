import { AxiosError } from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { sign } from "../api/sign";
import { AuthContext } from "../context/AuthContext";

interface ISgin {
  email: string;
  password: string;
}

export const useSgin = (url: string, message: string) => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSgin = async (data: ISgin) => {
    try {
      const token = await sign(url, data.email, data.password);
      localStorage.setItem("Access Token", token);
      dispatch({ type: "login" });
      alert(message);
      navigate("/");
    } catch (error) {
      const { response } = error as unknown as AxiosError;
      if (response) {
        throw { status: response.status, data: response.data };
      }
      throw error;
    }
  };
  return { handleSgin };
};
