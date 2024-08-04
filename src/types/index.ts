export interface Survey {
  id: number;
  title: string;
  description: string;
}

export interface User {
  username: string;
}

export interface LoginRequestAction {
  type: 'LOGIN_REQUEST';
  payload: { username: string; password: string };
}

export interface LoginSuccessAction {
  type: 'LOGIN_SUCCESS';
  payload: User;
}

export interface LogoutAction {
  type: 'LOGOUT';
}

export type AuthAction = LoginRequestAction | LoginSuccessAction | LogoutAction;

