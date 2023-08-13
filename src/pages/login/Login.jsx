import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";

const Login = () => {
   const { setIsAuth } = useContext(AuthContext);

   const login = (e) => {
      e.preventDefault();
      setIsAuth(true);
      localStorage.setItem("auth", "true");
   };

   return (
      <div>
         <h1>Страничка регистрации</h1>
         <form onSubmit={login}>
            <MyInput type="text" placeholder="login" />
            <MyInput type="password" placeholder="password" />
            <MyButton>Enter</MyButton>
         </form>
      </div>
   );
};

export default Login;
