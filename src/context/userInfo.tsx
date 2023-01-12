import React, { createContext, ReactNode, useEffect, useReducer } from "react";

interface IChildren {
  children: ReactNode;
}

interface IAuthAction {
  type: string;
  payload: string | null;
}
interface IState {
  token: string | null;
  isAuthReady: boolean;
}
interface IContext {
  state: IState;
  dispatch: React.Dispatch<any>;
}
const initialState: IState = {
  token: null,
  isAuthReady: false,
};

// context 객체를 생성합니다.
const AuthContext = createContext<IContext>({
  state: initialState,
  dispatch: () => null,
});

const authReducer = (state: IState, action: IAuthAction): IState => {
  switch (action.type) {
    case "login":
      return { ...state, isAuthReady: true };
    case "authIsReady":
      return { token: action.payload, isAuthReady: true };
    case "logout":
      return { token: null, isAuthReady: false };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }: IChildren) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (localStorage.getItem("Access Token")) {
      dispatch({
        type: "authIsReady",
        payload: localStorage.getItem("Access Token"),
      });
    }
  }, [state.isAuthReady]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
