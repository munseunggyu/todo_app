import { apiInstance } from "./apiInstance";

interface Ilogin {
  message: string;
  token: string;
}

export const sign = async (url: string, email: string, password: string) => {
  const response = await apiInstance.post<Ilogin>(url, {
    email,
    password,
  });
  return response.data.token;
};
