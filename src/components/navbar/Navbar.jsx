import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import MyButton from "../UI/button/MyButton";
import "./Navbar.css";

const Navbar = () => {
   const { isAuth, setIsAuth } = useContext(AuthContext);
   const logout = () => {
      setIsAuth(false);
      localStorage.removeItem("auth");
   };
   return (
      <div className="navbar">
         <div className="navbar__links">
            <Link to="/posts">Посты</Link>
            <Link to="/about">О сайте</Link>
         </div>
         {isAuth ? (
            <MyButton onClick={logout}>Выйти</MyButton>
         ) : (
            <Link to="/login">
               <MyButton>Войти</MyButton>
            </Link>
         )}
      </div>
   );
};

export default Navbar;
