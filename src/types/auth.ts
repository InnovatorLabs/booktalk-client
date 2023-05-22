export type LoginFormType = {
  email: string;
  password: string;
};

export type SignupType = {
  email: string;
  password: string;
  passwordConfirm: string;
  nickName: string;
};

export interface ISignupErrorMsg extends SignupType {
  confirm: string;
}
