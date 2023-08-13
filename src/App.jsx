import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import AppRouter from "./components/appRouter/AppRouter";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
   const [isAuth, setIsAuth] = useState(false);

   useEffect(() => {
      if (localStorage.getItem("auth")) {
         setIsAuth(true);
      }
   },[]);
   return (
      <AuthContext.Provider
         value={{
            isAuth,
            setIsAuth,
         }}
      >
         <BrowserRouter>
            <Navbar />
            <AppRouter />
         </BrowserRouter>
      </AuthContext.Provider>
   );
};

export default App;
