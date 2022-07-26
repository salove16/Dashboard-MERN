import { useState } from "react";
import { createContext } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const checkAuth = () => {
    // console.log(auth);

    if (!auth) {
      // alert("hello")

      return <Navigate to={"/login"} />;
    }
  };
  const handleAuth = () => {
    const token = localStorage.getItem("token");
    // console.log("token", token);
    if (token) {
      setAuth(true);
    }
  };
  return (
    <AuthContext.Provider value={{ handleAuth, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
