export type User = {
  name: string;
  email: string;
  password: string;
};

export type CurrentUser = Omit<User, 'password'>;
