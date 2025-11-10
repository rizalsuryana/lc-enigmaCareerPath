import { useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/pages/Dashboard";
import LoginPage from "./components/pages/LoginPage";
import { ToastContainer } from "react-toastify";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Dashboard onLogout={handleLogout} />
        </>
      ) : (
        <>
          <LoginPage onLogin={handleLogin} />
        </>
      )}
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
