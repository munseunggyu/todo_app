import { AxiosError } from "axios";
import { useContext, useState } from "react";
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
  const [error, setError] = useState();

  const handleSgin = async (data: ISgin) => {
    try {
      const token = await sign(url, data.email, data.password);
      localStorage.setItem("Access Token", token);
      dispatch({ type: "login" });
      alert(message);
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.details);
        setError(error.response?.data.details);
      }
    }
  };
  return { handleSgin, error };
};
