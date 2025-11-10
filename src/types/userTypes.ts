export interface UserInterface {
  username: string;
  password: string;
}

export interface LoginInterface {
  onLogin: () => void;
}

export interface RoleInterface {
  id: number;
  role: string;
}
