import LoginForm from "../molecules/LoginForm";
import LoginMenu from "../molecules/LoginMenu";

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="hidden md:block">
        <LoginMenu />
      </div>
      <div className="flex items-center justify-center bg-gray-100">
        <LoginForm onLogin={onLogin} />
      </div>
    </div>
  );
}
