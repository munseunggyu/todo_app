import { api } from "./api";

interface Ilogin {
  message: string;
  token: string;
}

export const sign = async (url: string, email: string, password: string) => {
  const response = await api.post<Ilogin>(url, {
    email,
    password,
  });
  return response.data.token;
};
